const conf = {
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_PROJECT_URL),
    appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appwriteVerselApi : String(import.meta.env.VITE_APPWRITE_VERSEL_API),
    appwriteApi : String(import.meta.env.VITE_APPWRITE_API)
}

export default conf;