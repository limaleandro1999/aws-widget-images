const AWS = require('aws-sdk');

module.exports.getWidget = async (event, context) => {
  const cloudWatch = new AWS.CloudWatch();
  const widgetImage = await cloudWatch.getMetricWidgetImage({
    MetricWidget: event.body,
  }).promise();

  return {
    statusCode: 200,
    headers: {
      // 'Content-Type' : 'image/png',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods' : 'POST, GET, PUT, OPTIONS',
      'Access-Control-Allow-Headers' : 'x-api-key'
    },
    body: Buffer.from(widgetImage.MetricWidgetImage).toString('base64'),
  };
};
