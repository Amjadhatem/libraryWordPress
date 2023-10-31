<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'library' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'P^B^@2z4}X@_Ntzo}:80nB2!8FhXBpuOUsFh/}|s!]9e857c/oP_|<K^Dfh8<i<p' );
define( 'SECURE_AUTH_KEY',  'E/i;$9DOw;RG^E+ |P0cN2mq|k^:|IfpqyJx03L_kM4dtFt-2iR83tH2Y(t}`~yn' );
define( 'LOGGED_IN_KEY',    'v}79?rxQ$s=Hr_$=29AQx,l^QR(Mhx~v_+U8gO^>TYqm~hj}yo?/PY+Q{l,.b}?T' );
define( 'NONCE_KEY',        '3yQg{ ;!yu_@,`-)wu:Puxqf5)I%=i_b<)*cS51oeY(mRzkNC(AU(2YwS${.;vN:' );
define( 'AUTH_SALT',        'zk0I=A0tGvol/f9^>I];(OA_X{)r4+aQwA:JCId8Jj_UR[J~@Vh:dG@zn*<E,.@T' );
define( 'SECURE_AUTH_SALT', 'KS##*QLc-^(@ASE<`&Y{gx,{SF@kr^ClX2HI62c?@D&Dm6-J?5[eB4*7`ed:f.22' );
define( 'LOGGED_IN_SALT',   'H*2:q#_NN /^6Dq,CDO)&Wm@lIHvU<CbWmCtZ,0SD4Z?8rR=IIDg!;YqGZ9X])9]' );
define( 'NONCE_SALT',       '2f=!udOM*,-pPkrmG <6#Ue}f8+9+UOl/W^oN<LOl68+.n9 qAw-z0(2>45o9(IB' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_library';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
