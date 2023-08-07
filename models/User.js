import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema(
{
    username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    },
    email: {
    type: String,
    unique: true,
    required: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
    },
    thoughts: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
    },
    ],
    friends: [
    {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    ],
},
{
    toJSON: {
    virtuals: true,
    getters: true,
    },
    id: false,
}
);

userSchema.virtual('friendCount').get(function () {
return this.friends.length;
});

const User = mongoose.model('User', userSchema);

export default User;
