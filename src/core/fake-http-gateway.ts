import { injectable, inject } from 'inversify'

@injectable()
export class FakeHttpGateway {
  get = async (path: string) => {}

  post = async (path: string, requestDto: object) => {}

  delete = async (path: string) => {}
}
