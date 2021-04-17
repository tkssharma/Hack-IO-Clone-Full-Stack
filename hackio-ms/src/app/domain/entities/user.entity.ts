import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import TechnologyPost from './post.entity';


@Entity({name: 'user'})
export default class User {
 
    @PrimaryGeneratedColumn('uuid')
    public id!: string;

    @Column({ type: 'varchar', length: 255, unique: true})
    public user_id!: string;

    @Column({ type: 'varchar', length: 255, unique: true })
    public email!: string;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP',
     select: false  })
    public created_at!: Date;

    @OneToMany(()=> TechnologyPost, event => event.user)
    public user_posts!: TechnologyPost[]
  
    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', select: false  })
    public updated_at!: Date;
}
