import JsonWebToken from "jsonwebtoken";

export const generateToken = (user) => {
    return JsonWebToken.sign(
        {
            id: user.id,
            email:user.email
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1h",
        }
    )
};

