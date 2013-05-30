<?php
// $Id$

/**
 * @file
 * Administration page callbacks for the trackvisit module.
 */

/**
 * Form builder. Configure annotations.
 *
 * @ingroup forms
 * @see system_settings_form().
 */
function trackvisit_admin_settings() {

  // Get an array of node types with internal names as keys and
  // "friendly names" as values. E.g.,
  // array('page' => 'Page', 'story' => 'Story')
  
  $form['trackvisit_allowed'] = array(
    '#type' => 'radios',
    '#title' => t('Show Track Visit'),
    '#description' => t('Choose if the author only see the visits or all users (admin always see visits)'),
    '#options' => array(
      0 => t('Only to author'),
      1 => t('Only to admin'),
      2 => t('To all users'),
    ),
    '#default_value' => variable_get('trackvisit_allowed', 0) // Default to author
  );

  $types = node_type_get_types();
  foreach($types as $node_type) { 
     $options[$node_type->type] = $node_type->name;
  }  
  
  $form['trackvisit_node_types'] = array( 
    '#type' => 'checkboxes', 
    '#title' => t('Content types'), 
    '#options' => $options, 
    '#default_value' => variable_get('trackvisit_node_types', array('page')), 
    '#description' => t('Trackvisit these content types only.')
  ); 

  return system_settings_form($form, TRUE); 

}






