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
}); 

let User = model("User", userSchema); //table banako

export default User;
//jaile pani database ma data chai table ko form ma save huncha 
