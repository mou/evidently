#!/usr/bin/env python
# coding: utf-8

import json
import pandas as pd
from pandas.api.types import is_numeric_dtype
import numpy as np

from scipy.stats import ks_2samp, probplot
import plotly.graph_objs as go
import plotly.figure_factory as ff

from evidently.model.widget import BaseWidgetInfo, AlertStats, AdditionalGraphInfo
from evidently.widgets.widget import Widget

red = "#ed0400"
grey = "#4d4d4d"


class RegProdErrorNormalityWidget(Widget):
    def __init__(self, title: str):
        super().__init__()
        self.title = title

    def get_info(self) -> BaseWidgetInfo:
        #if self.wi:
        return self.wi
        #raise ValueError("No prediction data provided")

    def calculate(self, reference_data: pd.DataFrame, production_data: pd.DataFrame, column_mapping, analyzes_results):
        if column_mapping:
            date_column = column_mapping.get('datetime')
            id_column = column_mapping.get('id')
            target_column = column_mapping.get('target')
            prediction_column = column_mapping.get('prediction')
            num_feature_names = column_mapping.get('numerical_features')
            if num_feature_names is None:
                num_feature_names = []
            else:
                num_feature_names = [name for name in num_feature_names if is_numeric_dtype(reference_data[name])] 

            cat_feature_names = column_mapping.get('categorical_features')
            if cat_feature_names is None:
                cat_feature_names = []
            else:
                cat_feature_names = [name for name in cat_feature_names if is_numeric_dtype(reference_data[name])] 
        
        else:
            date_column = 'datetime' if 'datetime' in reference_data.columns else None
            id_column = None
            target_column = 'target' if 'target' in reference_data.columns else None
            prediction_column = 'prediction' if 'prediction' in reference_data.columns else None

            utility_columns = [date_column, id_column, target_column, prediction_column]

            num_feature_names = list(set(reference_data.select_dtypes([np.number]).columns) - set(utility_columns))
            cat_feature_names = list(set(reference_data.select_dtypes([np.object]).columns) - set(utility_columns))

        if production_data is not None:
            if target_column is not None and prediction_column is not None:
                production_data.replace([np.inf, -np.inf], np.nan, inplace=True)
                production_data.dropna(axis=0, how='any', inplace=True)
                
                #plot output correlations
                error_norm = go.Figure()

                error = production_data[prediction_column] - production_data[target_column] 
                qq_lines = probplot(error, dist="norm", plot=None)
                theoretical_q_x = np.linspace(qq_lines[0][0][0], qq_lines[0][0][-1], 100)

                sample_quantile_trace = go.Scatter(
                    x = qq_lines[0][0],
                    y = qq_lines[0][1],
                    mode = 'markers',
                    name = 'Dataset Quantiles',
                    marker=dict(
                        size=6,
                        color=red
                    )
                )

                theoretical_quantile_trace = go.Scatter(
                    x = theoretical_q_x,
                    y = qq_lines[1][0]*theoretical_q_x + qq_lines[1][1],
                    mode = 'lines',
                    name = 'Theoretical Quantiles',
                    marker=dict(
                        size=6,
                        color=grey
                    )
                )

                error_norm.add_trace(sample_quantile_trace)
                error_norm.add_trace(theoretical_quantile_trace)

                error_norm.update_layout(
                    xaxis_title = "Theoretical Quantiles",
                    yaxis_title = "Dataset Quantiles",

                    legend = dict(
                    orientation="h",
                    yanchor="bottom",
                    y=1.02,
                    xanchor="right",
                    x=1
                    )
                )

                error_norm_json = json.loads(error_norm.to_json())

                self.wi = BaseWidgetInfo(
                    title=self.title,
                    type="big_graph",
                    details="",
                    alertStats=AlertStats(),
                    alerts=[],
                    alertsPosition="row",
                    insights=[],
                    size=1,
                    params={
                        "data": error_norm_json['data'],
                        "layout": error_norm_json['layout']
                    },
                    additionalGraphs=[],
                )
            else:
                self.wi = None
        else:
            self.wi = None

