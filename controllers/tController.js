import { User, Thought } from '../models';

const amountOfThoughts = async () => {
const numberOfThoughts = await Thought.aggregate().count('thoughtCount');
return numberOfThoughts;
};

const getThoughts = async (req, res) => {
try {
    const thoughts = await Thought.find();
    const thoughtObj = {
    thoughts,
    thoughtCount: await amountOfThoughts(),
    };
    return res.json(thoughtObj);
} catch (err) {
    console.log(err);
    return res.status(500).json(err);
}
};

export {
getThoughts,
getSingleThought,
createThought,
updateThought,
deleteThought,
addReaction,
removeReaction
};
