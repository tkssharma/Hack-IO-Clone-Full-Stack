import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import User from "./user.entity";
import Technology from './technology.entity';
import PostType from "./post-type.entity";


@Entity({name: 'post'})
export default class TechnologyPost {
 
    @PrimaryGeneratedColumn('uuid')
    public id!: string;

    @Column({ type: 'varchar', length: 255})
    public title!: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    public name!: string;

    @Column({ type: 'varchar', nullable: true })
    public description!: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    public technology_name!: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    public media_link!: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    public owner!: string;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', select: false  })
    public created_at!: Date;

    @ManyToOne(() => User, event => event.user_posts)
    public user!: User;

    @ManyToOne(() => Technology, event => event.technology_posts)
    public technology!: Technology;

    @ManyToOne(() => PostType, event => event.user_post_type)
    public post_type!: PostType;
    
    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', select: false  })
    public updated_at!: Date;
}

