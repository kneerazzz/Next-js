import conf from "@/conf/conf";
import { Account , ID ,  Client } from "appwrite";


export class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectID)
        this.account = new Account(this.client)
    }

    async createAccount({email,username, password, name}: {email: string, username: string, password: string, name: string}) {
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount) {
                return this.login({email,password});
            }
            else {
                return userAccount;
            }
        }catch(error){
            console.log("the error on creating account", error);
            throw error;
        }
    }


    async getCurrentUser(){
        try{
            const user = await this.account.get();
            if(user) {
                return user;
            }
        }catch(error){
            console.log("Error getting current user", error);
            throw error;
        }
    }


    async login({email, password}: {email: string, password: string}){
        try{
            return await this.account.createEmailPasswordSession(email, password);

        }catch(error){
            console.log("error in login", error);
            throw error;
        }
    }

    async logout() {
        try{
            return this.account.deleteSessions();
        }
        catch(error){
            console.log("error loging out",error);
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;