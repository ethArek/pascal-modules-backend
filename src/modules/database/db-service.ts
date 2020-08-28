import knex from 'knex';
import dbConfig from '../../config/database';

export class DbService {
  private conn: knex<any, unknown[]>;

  constructor() {
    this.conn = knex({
      client: 'pg',
      connection: process.env.PG_CONNECTION_STRING || dbConfig.dbConnectionString,
      searchPath: ['knex', 'public'],
    });
  }

  get connection () {
    return this.conn;
  } 
}
