# Basic Commands
- npm i -g @nestjs/cli  # Install NestJS CLI globally
- nest --version
- nest new nest-mongo-app  # Create a new project
- npm install
- npm install @nestjs/mongoose mongoose
- nest generate module user
- nest generate service user
- nest generate controller user
- npm run start:dev
- curl -X GET http://localhost:3000
- curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name":"John Doe","email":"john@example.com","age":30}'
- curl -X GET http://localhost:3000/users
- npm install morgan
- nest generate resource user
- nest g resource user
- nest g resource user --no-spec   -> not preferred
- npm install jsonwebtoken @types/jsonwebtoken





## dot env
- import { Module } from '@nestjs/common';
- import { ConfigModule } from '@nestjs/config';
- import { MongooseModule } from '@nestjs/mongoose';
- import { UserModule } from './user/user.module';

- @Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    UserModule,
  ],
})
- export class AppModule {}
## dot env


## jwt
- export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(JwtAuthMiddleware).forRoutes('*'); // Apply to all routes
    // consumer.apply(JwtAuthMiddleware).forRoutes('users', 'orders');
  }
}
## jwt

## jwt inside
- @UseGuards(JwtAuthGuard) // Protect this controller
## jwt inside





$ npm i -g @nestjs/cli
$ nest new project-name


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

