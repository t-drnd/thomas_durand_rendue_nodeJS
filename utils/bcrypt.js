import bcrypt from "bcrypt";

const saltRounds = 10;

export const hashPassword = (passeword) => {
    return bcrypt.hash(passeword, saltRounds);
};

export const comparePassword = (passeword, hash) => {
    return bcrypt.compare(passeword, hash);
};