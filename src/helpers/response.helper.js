class Response {
  constructor(res) {
    this.res = res
  }

  statusCode = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    SERVER_ERROR: 500,
  }

  json(code=200, data=null, message=null) {
    return this.res
      .status(code)
      .json({
        data,
        code,
        message,
        sucess: code => 200 && code < 300,
        errors: [],
      })
  }

  error(code, errors = []) {
    return this.res
      .status(code)
      .json({
        data: null,
        code,
        message: null,
        sucess: code => 200 && code < 300,
        errors,
      })
  }

  noContent() {
    return this.res.status(this.statusCode.NO_CONTENT).json()
  }
}

export default Response
