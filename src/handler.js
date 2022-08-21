'use strict';

module.exports.myLamdaFunction = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'this is myLamdaFunction',
        input: event,
      },
      null,
      2
    ),
  };
};
