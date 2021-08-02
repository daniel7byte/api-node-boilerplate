import Controller from './base.controller'
import Response from '../helpers/response.helper'
import UserService from '../services/user.service'

class UserController extends Controller {
  constructor() {
    super(new UserService())
  }

  /**
  * -------------------------------------------------------------
  * Get an array with all users
  * 
  * @return {object} all users or empty array
  * 
  * -------------------------------------------------------------
  */
  async index (req, res) {
    const response = new Response(res)
    try {
      const data = await this.service.getAll()
      return response.json(
        response.statusCode.OK,
        data
      )
    } catch (e) {
      return response.error(
        response.statusCode.SERVER_ERROR,
        [e?.message]
      )
    }
  }

  /**
  * -------------------------------------------------------------
  * Get one user by id
  * 
  * @param {integer} id user id
  * 
  * @return {object} user or null
  * 
  * -------------------------------------------------------------
  */
  async get (req, res) {
    const id = req?.params?.id
    const response = new Response(res)
    try {
      const data = await this.service.get(id)

      if(!data) {
        return response.error( response.statusCode.NOT_FOUND, ["User doesn't exist"])  
      }

      return response.json( response.statusCode.OK, data )
    } catch (e) {
      return response.error(
        response.statusCode.SERVER_ERROR,
        [e?.message]
      )
    }
  }

  /**
  * -------------------------------------------------------------
  * Create new user
  * 
  * @return {object} new user
  * 
  * -------------------------------------------------------------
  */
  async create (req, res) {
    const payload = req?.body
    const response = new Response(res)
    try {
      const data = await this.service.create(payload)
      return response.json(response.statusCode.OK, data)
    } catch (e) {
      return response.error(
        response.statusCode.SERVER_ERROR,
        [e?.message]
      )
    }
  }

  /**
  * -------------------------------------------------------------
  * Update user by id
  * 
  * @param {integer} id user id
  * 
  * @return {object} updated user
  * 
  * -------------------------------------------------------------
  */
  async update (req, res) {
    const id = req?.params?.id
    const payload = req?.body
    const response = new Response(res)
    try {
      const data = await this.service.update(id, payload)

      if(data?.length === 0) throw Error("It wasn't possible to update this user")

      return response.json(response.statusCode.OK, data)
    } catch (e) {
      return response.error(
        response.statusCode.SERVER_ERROR,
        [e?.message]
      )
    }
  }

  /**
  * -------------------------------------------------------------
  * Remove user by id
  * 
  * @param {integer} id user id
  * 
  * @return {null} no content
  * 
  * -------------------------------------------------------------
  */
  async destroy (req, res) {
    const id = req?.params?.id
    const response = new Response(res)
    try {
      const data = await this.service.destroy(id)

      if(!data) throw Error("It wasn't possible to remove this user")

      return response.noContent()
    } catch (e) {
      return response.error(
        response.statusCode.SERVER_ERROR,
        [e?.message]
      )
    }
  }
}

export default UserController