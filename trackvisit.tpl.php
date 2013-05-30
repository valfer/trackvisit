<?php
// $Id$

/**
 * @file
 * Default theme implementation for rendering post visits information
 *
 * Available variables:
 * - $tot_visits:  total visits of this post
 */
?>

<?
if ($visitInfo != NULL)
{ 
	$tot_visits = $visitInfo['tot_visits'];
	// per test
	//$tot_visits = 14;
?>
	<div data-nid="<?=$node_id?>" data-total="<?=$tot_visits?>" data-loaded="0" class="trackvisit <?= $tot_visits>0 ? 'trackvisit-link' : 'trackvisit-info' ?>">
		<?= t('Visited by') ?> <?php print $tot_visits; ?>
	</div>
	<? if ($tot_visits > 0) { ?>
	<div class="trackvisit-list">
		<ul>
		</ul>
		<div class="trackvisit-list-loading">
			<?= t('Loading...') ?>
		</div>
		<div class="trackvisit-list-more">
			<?= t('Load more') ?>
		</div>
		<div class="trackvisit-list-close">
			<?= t('Close') ?>
		</div>
	</div>
	<? } ?>
<? } ?>
