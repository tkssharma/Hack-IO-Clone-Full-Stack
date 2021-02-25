import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({name: 'technology'})
export default class Technology {
 
    @PrimaryGeneratedColumn('uuid')
    public id!: string;

    @Column({ type: 'varchar', length: 255, unique: true })
    public name!: string;

    @Column({ type: 'varchar', nullable: true})
    public description!: string;

    @Column({ type: 'varchar', nullable: true})
    public desc!: string;

    @Column({ type: 'boolean', default: false })
    public is_deleted!: string;

    @ManyToOne(() => Technology, (event) => event.id)
    public parent!: Technology;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', select: false  })
    public created_at!: Date;
  
    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP', select: false  })
    public updated_at!: Date;
}
