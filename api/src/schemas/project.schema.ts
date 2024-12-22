import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ProjectsDocument = HydratedDocument<Projects>;

@Schema({ timestamps: true })
export class Projects {

    @Prop({ type: String, required: true })
    title: string;

    @Prop({ type: String, required: true })
    desc: string;

    @Prop({ type: String, default: '' })
    img: string;

    @Prop({ type: [String], default: [] })
    tags: string[];

    @Prop({ type: String, required: true, default: 'Working' })
    status: string;

    @Prop({ type: [String], default: [] })
    works: string[];

    @Prop({
        type: [
            {
                link: { type: String, required: true },
                name: { type: String, required: true },
                icon: { type: String, required: true },
            },
        ],
        default: [],
        _id: false,
    })
    tools: {
        link: string;
        name: string;
        icon: string;
    }[];

    @Prop({
        type: [
            {
                id: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
                role: { type: String, required: true },
                access: { type: String, required: true, default: 'View Only' },
            },
        ],
        required: true,
        default: [],
        _id: false,
    })
    members: {
        id: mongoose.Schema.Types.ObjectId;
        role: string;
        access: string;
    }[];
}

export const ProjectsSchema = SchemaFactory.createForClass(Projects);