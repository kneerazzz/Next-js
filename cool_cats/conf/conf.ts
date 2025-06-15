const conf = {
    appwriteUrl: String(process.env.NEXT_PUBLIC_APPWRITE_URL),
    appwriteProjectID: String(process.env.NEXT_PUBLIC_PROJECT_ID),
    appwriteDatabaseID: String(process.env.NEXT_PUBLIC_DATABASE_ID),
    appwriteCollectionID: String(process.env.NEXT_PUBLIC_COLLECTION_ID),
    appwriteBucketID: String(process.env.NEXT_PUBLIC_BUCKET_ID),
}

export default conf