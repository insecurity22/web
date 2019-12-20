import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';

const config = {
    colors: ['#0f1527', '#56c0ba', '#f54b8a'], // #9fccf4
      //'', '#f88d8c', '#b5e2b6'],
    chart: {
        zoomType: 'xy',
        width:600,
        height:300,
        borderRadius: 10,
        marginBottom: 85,
        marginLeft: 60,
        marginRight: 60, // or delete
        marginTop: 60 // title
    },
    title: {
        text: 'Voice Phishing Damage Status by Year',
        style: {
           fontSize: "16px"
       }
    },
    xAxis: [{
        categories: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}',
            style: {
                color: '#233958'
            }
        },
        title: {
            text: null
        },
        opposite: true

    }, { // Secondary yAxis
        gridLineWidth: 0,
        title: {
            text: null
        },
        labels: {
            format: '{value}',
            style: {
                color: '#56c0ba'
            }
        }

    }, { // Tertiary yAxis
        gridLineWidth: 0,
        title: {
            text: null
        },
        labels: {
            format: '{value}',
            style: {
                color: '#f54b8a'
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        itemDistance: 50,
        margin: 20,
        align: 'center',
        x: 0,
        verticalAlign: 'bottom',
        y: 0,
        floating: true,
        backgroundColor:
            ReactHighcharts.Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
    },
    series: [{
        name: '피해액(억원)',
        type: 'column',
        yAxis: 1,
        pointWidth: 20,
        data: [1429, 1887, 2040, 1468, 2470, 1796, 3580]

    }, {
        name: '검거건수',
        type: 'spline',
        yAxis: 2,
        pointWidth: 20,
        data: [8143, 8170, 15887, 11386, 19618, 15135, 22709],
        marker: {
            enabled: false
        },
        dashStyle: 'shortdot'
    }, {
        name: '발생건수',
        type: 'spline',
        pointWidth: 20, // 막대 너비
        data: [21634, 22205, 18549, 17040, 24259, 16338, 22960]
    },],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 400
            },
            chartOptions: {
                legend: {
                    floating: false,
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom',
                    x: 0,
                    y: 0
                },
                yAxis: [{
                    labels: {
                        align: 'right',
                        x: 0,
                        y: -6
                    },
                    showLastLabel: false
                }, {
                    labels: {
                        align: 'left',
                        x: 0,
                        y: -6
                    },
                    showLastLabel: false
                }, {
                    visible: false
                }]
            }
        }]
    },
    credits: {
         enabled: false
    }
};

export default class Chart extends Component {
  render() {
    return (
        <ReactHighcharts config={config}></ReactHighcharts>
    );
  }
}
