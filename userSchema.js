import{ Schema,model} from "mongoose";
let userSchema = new Schema();

userSchema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}); 

let user = model("user", userSchema); //table banako

export default user;
//jaile pani database ma data chai table ko form ma save huncha 