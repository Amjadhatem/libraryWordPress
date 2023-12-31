<?php
namespace codexpert\CoDesigner;

use Elementor\Repeater;
use Elementor\Widget_Base;
use Elementor\Controls_Manager;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Box_Shadow;
use Elementor\Group_Control_Typography;
use Elementor\Group_Control_Background;
use Elementor\Core\Kits\Documents\Tabs\Global_Typography;

class Product_Add_To_Wishlist extends Widget_Base {

	public $id;

	public function __construct( $data = [], $args = null ) {
	    parent::__construct( $data, $args );

	    $this->id = wcd_get_widget_id( __CLASS__ );
	    $this->widget = wcd_get_widget( $this->id );
	}

	public function get_script_depends() {
		return [];
	}

	public function get_style_depends() {
		return [];
	}

	public function get_name() {
		return $this->id;
	}

	public function get_title() {
		return $this->widget['title'];
	}

	public function get_icon() {
		return $this->widget['icon'];
	}

	public function get_categories() {
		return $this->widget['categories'];
	}

	protected function register_controls() {

		/**
		 * Repeater Tabs
		 */
		$this->start_controls_section(
			'add_to_wishlist_section',
			[
				'label' 		=> __( 'Add to wishlist', 'codesigner' ),
				'tab' 			=> Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'button_type',
			[
				'label' 	=> __( 'Button Type', 'codesigner' ),
				'type' 		=> Controls_Manager::SELECT,
				'options'	=> [
					'text' => __( 'Text', 'codesigner' ),
					'icon' => __( 'Icon', 'codesigner' )
				],
				'default' 		=> 'icon',
			]
		);

		$this->add_control(
			'button_text',
			[
				'label' 		=> __( 'Button Text', 'codesigner' ),
				'type' 			=> Controls_Manager::TEXT,
				'default' 		=> __( 'Add to wishlist', 'codesigner' ),
				'placeholder' 	=> __( 'Type your title here', 'codesigner' ),
                'condition'     => [
                    'button_type' => 'text'
                ],
			]
		);

		$this->add_control(
		    'wishlist_icon',
		    [
		        'label'         => __( 'Icon', 'codesigner' ),
		        'type'          => Controls_Manager::ICONS,
		        'fa4compatibility' => 'icon',
                'condition'     => [
                    'button_type' => 'icon'
                ],
		        'default'       => [
		            'value'     => 'eicon-heart',
		            'library'   => 'fa-solid',
		        ],
		        'recommended'   => [
		            'fa-regular' => [
		                'heart',
		            ],
		            'fa-solid'  => [
		                'heart',
		                'heart-broken',
		                'heartbeat',
		            ]
		        ]
		    ]
		);

		$this->add_control(
		    'alignment',
		    [
		        'label'     	=> __( 'Button Alignment', 'codesigner' ),
		        'type'      	=>Controls_Manager::CHOOSE,
		        'options' => [
					'left' => [
						'title' => __( 'Left', 'codesigner' ),
						'icon' => 'eicon-text-align-left',
					],
					'center' => [
						'title' => __( 'Center', 'codesigner' ),
						'icon' => 'eicon-text-align-center',
					],
					'right' => [
						'title' => __( 'Right', 'codesigner' ),
						'icon' => 'eicon-text-align-right',
					],
				],
		        'default'  		=> 'left',		        
		        'selectors' => [
		            '.wl {{WRAPPER}} .wl-add-to-wishlist' => 'text-align: {{VALUE}}',
		        ],
		    ]
		);

		$this->end_controls_section();

		/**
         * Wishlist Button
         */
        $this->start_controls_section(
            'section_style_wishlist',
            [
                'label' => __( 'Wishlist Button', 'codesigner' ),
                'tab'   => Controls_Manager::TAB_STYLE,
            ]
        );

        $this->add_responsive_control(
            'wishlist_icon_size',
            [
                'label'     => __( 'Icon Size', 'codesigner' ),
                'type'      => Controls_Manager::SLIDER,
                'size_units'=> [ 'px', 'em' ],
                'selectors' => [
                    '.wl {{WRAPPER}} .wl-add-to-wishlist .wl-wish-button i' => 'font-size: {{SIZE}}{{UNIT}}',
                ],
                'condition'     => [
                    'button_type' => 'icon'
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Typography::get_type(),
            [
                'name'      	=> 'title_typography',
                'label'     	=> __( 'Typography', 'codesigner-pro' ),
                'global' => [
                    'default' => Global_Typography::TYPOGRAPHY_TEXT,
                ],
                'selector'  	=> '.wl {{WRAPPER}} .wl-add-to-wishlist .wl-wish-button',
                'condition'     => [
                    'button_type' => 'text'
                ],
            ]
        );

        $this->add_responsive_control(
            'wishlist_padding',
            [
                'label'         => __( 'Padding', 'codesigner' ),
                'type'          => Controls_Manager::DIMENSIONS,
                'size_units'    => [ 'px', '%' ],
                'selectors'     => [
                    '.wl {{WRAPPER}} .wl-add-to-wishlist .wl-wish-button' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->add_responsive_control(
            'wishlist_border_radius',
            [
                'label'         => __( 'Border Radius', 'codesigner' ),
                'type'          => Controls_Manager::DIMENSIONS,
                'size_units'    => [ 'px', '%' ],
                'selectors'     => [
                    '.wl {{WRAPPER}} .wl-add-to-wishlist .wl-wish-button' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
                ],
            ]
        );

        $this->start_controls_tabs(
            'wishlist_normal_separator',
            [
                'separator' => 'before'
            ]
        );

        $this->start_controls_tab(
            'wishlist_normal',
            [
                'label'     => __( 'Normal', 'codesigner' ),
            ]
        );

        $this->add_control(
            'wishlist_icon_color',
            [
                'label'     => __( 'Color', 'codesigner' ),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '.wl {{WRAPPER}} .wl-add-to-wishlist .wl-wish-button' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_control(
            'wishlist_icon_bg',
            [
                'label'     => __( 'Background', 'codesigner' ),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '.wl {{WRAPPER}} .wl-add-to-wishlist .wl-wish-button' => 'background-color: {{VALUE}}',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Border::get_type(),
            [
                'name'          => 'wishlist_border',
                'label'         => __( 'Border', 'codesigner' ),
                'selector'      => '.wl {{WRAPPER}} .wl-add-to-wishlist .wl-wish-button',
            ]
        );

        $this->end_controls_tab();

        $this->start_controls_tab(
            'wishlist_hover',
            [
                'label'     => __( 'Hover', 'codesigner' ),
            ]
        );

        $this->add_control(
            'wishlist_icon_color_hover',
            [
                'label'     => __( 'Color', 'codesigner' ),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '.wl {{WRAPPER}} .wl-add-to-wishlist .wl-wish-button:hover' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_control(
            'wishlist_icon_bg_hover',
            [
                'label'     => __( 'Background', 'codesigner' ),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '.wl {{WRAPPER}} .wl-add-to-wishlist .wl-wish-button:hover' => 'background-color: {{VALUE}}',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Border::get_type(),
            [
                'name'          => 'wishlist_border_hover',
                'label'         => __( 'Border', 'codesigner' ),
                'selector'      => '.wl {{WRAPPER}} .wl-add-to-wishlist .wl-wish-button:hover',
            ]
        );

        $this->end_controls_tab();

        $this->start_controls_tab(
            'wishlist_active',
            [
                'label'     => __( 'Active', 'codesigner' ),
            ]
        );

        $this->add_control(
            'wishlist_icon_color_active',
            [
                'label'     => __( 'Color', 'codesigner' ),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '.wl {{WRAPPER}} .wl-add-to-wishlist .wl-wish-button.ajax_add_to_wish.fav-item' => 'color: {{VALUE}}',
                ],
            ]
        );

        $this->add_control(
            'wishlist_icon_bg_active',
            [
                'label'     => __( 'Background', 'codesigner' ),
                'type'      => Controls_Manager::COLOR,
                'selectors' => [
                    '.wl {{WRAPPER}} .wl-add-to-wishlist .wl-wish-button.ajax_add_to_wish.fav-item' => 'background-color: {{VALUE}}',
                ],
            ]
        );

        $this->add_group_control(
            Group_Control_Border::get_type(),
            [
                'name'          => 'wishlist_border_active',
                'label'         => __( 'Border', 'codesigner' ),
                'selector'      => '.wl {{WRAPPER}} .wl-add-to-wishlist .wl-wish-button.ajax_add_to_wish.fav-item',
            ]
        );

        $this->end_controls_tab();
        $this->end_controls_tabs();
        $this->end_controls_section();
	}

	protected function wcd_get_product_type() {

		if ( ! function_exists( 'wc_get_product' ) ) {
			return false;
		}

		$product_id = get_the_ID();
		$product 	= wc_get_product( $product_id );

		if ( $product ) {
			return $product->get_type();
		}

		return false;
			
	}

	protected function render() {

		$settings 	= $this->get_settings_for_display();
		extract( $settings );

		$this->render_editing_attributes();

		if ( ! is_woocommerce_activated() ) return;

		$product_id = get_the_ID();
		$product 	= wc_get_product( $product_id );

		if ( isset( $_POST['product_id'] ) ) {
			$product_id = codesigner_sanitize_number( $_POST['product_id'] );
			$product 	= wc_get_product( $product_id );
		}
		
		if ( empty( $product ) && ( wcd_is_edit_mode() || wcd_is_preview_mode() ) ) {
			$product_id = wcd_get_product_id();
			$product 	= wc_get_product( $product_id );
		}

		if ( ! $product ) {
			_e( 'This is not a product or an invalid ID is provided.', 'codesigner' );
			return;
		}

		if( wcd_is_live_mode() ) {
			wc_print_notices();
		}

		$user_id  = get_current_user_id();
		$wishlist = wcd_get_wishlist( $user_id );
		$fav_product = in_array( $product->get_ID(), $wishlist );

		if ( !empty( $fav_product ) ) {
		    $fav_item = ' fav-item';
		}
		else{
		    $fav_item = '';
		}
		if( !apply_filters( 'codesigner-pro_default_wishlist_icon', true, $product ) ) return;

		$title = __( "Add to Wishlist", "codesigner-pro" );
		if ( $button_type == 'icon' ) {
			$button_text = "<i class='". esc_attr( $wishlist_icon["value"] ) ."'></i>";
		}
		echo '<div class="wl-add-to-wishlist"><button class="wl-wish-button' . esc_attr( $fav_item ) . '" title="' . esc_attr( $title  ). '">
                ' . wp_kses_post( $button_text  ). '
            </button></div>';

		do_action( 'codesigner_after_main_content', $this );
	}

	private function render_editing_attributes() {
		$this->add_inline_editing_attributes( 'add_to_wishlist_text', 'basic' );
		$this->add_render_attribute( 'add_to_wishlist_text', 'class', 'single_add_to_wishlist_button button al' );
	}
}
