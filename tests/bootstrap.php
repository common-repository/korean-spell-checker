<?php
/**
 * PHPUnit bootstrap file
 *
 * @package Sample_Plugin
 */
$_tests_dir = getenv( 'WP_TESTS_DIR' );
if ( ! $_tests_dir ) {
	$_tests_dir = rtrim( sys_get_temp_dir(), '/\\' ) . '/wordpress-tests-lib';
}
if ( ! file_exists( $_tests_dir . '/includes/functions.php' ) ) {
	echo "Could not find $_tests_dir/includes/functions.php, have you run bin/install-wp-tests.sh ?";
	exit( 1 );
}
// Give access to tests_add_filter() function.
require_once $_tests_dir . '/includes/functions.php';
/**
 * Manually load the plugin being tested.
 */
function _manually_load_plugin() {
	include_once( dirname( dirname( __FILE__ ) )  . '/classes/class-base.php' );
	include_once( dirname( dirname( __FILE__ ) )  . '/classes/class-editor.php' );
	include_once( dirname( dirname( __FILE__ ) )  . '/classes/class-gutenberg.php' );
}
tests_add_filter( 'muplugins_loaded', '_manually_load_plugin' );

// Start up the WP testing environment.
require $_tests_dir . '/includes/bootstrap.php';