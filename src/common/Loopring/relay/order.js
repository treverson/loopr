import request from '../common/request'
import validator from '../common/validator'
import Response from '../common/response'
import code from "../common/code"

let headers = {
  'Content-Type': 'application/json'
}
export async function getOrders(filter){
  try {
    await validator.validate({value: filter.contractVersion, type: 'STRING'})
    await validator.validate({value: filter.pageIndex, type: 'OPTION_NUMBER'})
    await filter.market && validator.validate({value: filter.market, type: 'STRING'})
    await filter.owner && validator.validate({value: filter.owner, type: 'STRING'})
    await filter.orderHash && validator.validate({value: filter.orderHash, type: 'STRING'})
    await filter.pageSize && validator.validate({value: filter.pageSize, type: 'OPTION_NUMBER'})
  } catch (e) {
    console.error(e)
    return new Response(code.PARAM_VALID.code, code.PARAM_VALID.msg)
  }
  let body = {}
  body.method = 'loopring_getOrders'
  body.params = [filter]
  return request({
    method:'post',
    headers,
    body,
  })
}

export async function getCutoff(filter){
  try {
    //[wallet.address, settingsVersion, "latest"]
    await validator.validate({value: filter[0], type: 'STRING'})
    await validator.validate({value: filter[1], type: 'STRING'})
    await filter[2] && validator.validate({value: filter[2], type: 'DEFAULT_BLOCK'})
  } catch (e) {
    console.error(e)
    return new Response(code.PARAM_VALID.code, code.PARAM_VALID.msg)
  }
  let body = {}
  body.method = 'loopring_getCutoff'
  body.params = [filter]
  return request({
    method:'post',
    headers,
    body,
  })
}


