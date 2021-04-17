import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import TechnologyPost from './post.entity';


@Entity({name: 'post_type'})
export default class PostType {
 
    @PrimaryGeneratedColumn('uuid')
    public id!: string;

    @Column({ type: 'varchar', length: 255, unique: true})
    public name!: string;

    @Column({ type: 'varchar', length: 255, unique: true })
    public type!: string;

    @OneToMany(()=> TechnologyPost, event => event.post_type)
    public user_post_type!: TechnologyPost[]
  

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', select: false  })
    public created_at!: Date;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', select: false  })
    public updated_at!: Date;
}
