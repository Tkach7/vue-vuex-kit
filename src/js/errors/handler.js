export default {
    /** Handle error with database */
    errorDb() {
        throw new Error('Error response from database: Bad response from firebase database');
    }
}