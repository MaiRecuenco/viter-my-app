<?php
class Database
{
    private static $dbConnection;
    public static function connectDb()
    {
        // LOCALHOST
        $host = 'localhost';
        $dbname = 'viter_my_app';
        $username = 'root';
        $password = '';

        // === STRICT
        // EX 123 (int) === '123(string) is equal to (FALSE)
        // == NON STRICT
        // EX 123 (int) === '123(string) is equal to (TRUE)
        // [] Array
        // {} Object

        if (self::$dbConnection === null) {
            // IF NULL , set up our connection to data base
            self::$dbConnection = new PDO("mysql:host={$host};dbname={$dbname};", $username, $password, [PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]);
            self::$dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            self::$dbConnection->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
        }
        return self::$dbConnection;
    }
}
