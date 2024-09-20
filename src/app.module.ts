import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProductEntity } from './product/entities/product.entity'
import { ProductModule } from './product/product.module'
import { CategoryModule } from './category/category.module'
import { CategoryEntity } from './category/entities/category.entity'
import { UserEntity } from './user/entities/user.entity'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '217684',
            database: 'db_game_store',
            entities: [ProductEntity, CategoryEntity, UserEntity],
            synchronize: true,
            bigNumberStrings: true,
        }),
        ProductModule,
        CategoryModule,
        AuthModule,
        UserModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
