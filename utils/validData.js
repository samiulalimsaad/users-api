export const validateData = ({ gender, name, contact, address, photoUrl }) => {
    const obj = {};
    if (!gender) {
        throw new Error(`"gender" is require`);
    } else if (
        gender.toLowerCase() !== "male" &&
        gender.toLowerCase() !== "female"
    ) {
        throw new Error(`"gender" must be male or female`);
    } else {
        obj.gender = gender;
    }

    if (!name) {
        throw new Error(`"name" is require`);
    } else {
        obj.name = name;
    }

    if (!contact) {
        throw new Error(`"contact" number is require`);
    } else {
        obj.contact = contact;
    }
    if (!address) {
        throw new Error(`"address" is require`);
    } else {
        obj.address = address;
    }
    if (!photoUrl) {
        throw new Error(`"photoUrl" is require`);
    } else {
        obj.photoUrl = photoUrl;
    }

    return obj;
};
