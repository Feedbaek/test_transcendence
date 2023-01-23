import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.use(
		session({
			secret: process.env.SESSION_ID, //세션아이디
			resave: false, //세션이 수정되지 않아도 지속적으로 저장하게 하는 옵션
			saveUninitialized: false, //초기화되지 않는 세션을 저장하게 함
		}),
	);
	await app.listen(3000);
}
bootstrap();
