const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');

exports.getUser = async (ctx, next) => {
   if(ctx.query.id != 1){
       throw new ApiError(ApiErrorNames.USER_NOT_EXIST);
    // throw new Error();
    }
    ctx.body = {
        name: 'lao cao',
        age: 40,
        feature: 'stupid'
    }
}

exports.registerUser = async (ctx, next) => {
    console.log('registerUser', ctx.request.body);
}