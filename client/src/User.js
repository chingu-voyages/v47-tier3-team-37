class User {
    constructor(idUser, firstName, lastName, password, email, image, role, token, googleId, notes = []) {
        this.idUser = idUser;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.email = email;
        this.image = image;
        this.role = role;
        this.token = token;
        this.googleId = googleId;
        this.notes = notes;
    }
}

export default User;