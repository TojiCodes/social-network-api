import mongoose from 'mongoose';
import reactionSchema from './Reaction';

const { Schema } = mongoose;

const thoughtSchema = new Schema(
{
    thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 200,
    },
    createdAt: {
    type: Date,
    default: Date.now,
    },
    username: {
    type: String,
    required: true,
    },
    reactions: [reactionSchema],
},
{
    toJSON: {
    virtuals: true,
    getters: true,
    },
    id: false,
}
);

thoughtSchema.virtual('reactionCount').get(function() {
return this.reactions.length;
});

const Thought = mongoose.model('Thought', thoughtSchema);

export default Thought;
