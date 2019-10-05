
<form action="<?php if(!isset($search)) echo '/s' ?>" class="search_form">
    <input type="text" name="keyword" id="job" value="<?= $keyword ?>" placeholder="Kľúčové slovo" <?php if(isset($search)) echo 'autofocus  onfocus="this.select()"' ?>>
    <input type="text" name="location" id="location" value="<?= $location ?>" placeholder="Lokalita">
    <input type="hidden" name="location_id" id="location_id" value="<?= $location_id ?>" />
    
    <button class="btn btn-primary pull-right">Hľadať</button>
</form>