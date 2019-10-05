
<?php if($do=='upravit') { ?>

  <div class="image_my">
  <img src="<?php echo "$url_files/img/profil/no/$imaget" ?>" class="r50" />
  
  <form action="/moje/profil-obrazok" method="POST" name="changes" id="changeimage" enctype="multipart/form-data">
    <input type="file" name="image" id="image" class="hide" />
    <input type="submit" name="submit" id="submit" value="change" class="hide" />
  </form>

  <?php
  if($image) echo '<a href="#" id="upload" title="Zmeniť obrázok">Zmeniť</a> / <a href="/moje/profil/vymazat-obrazok" title="Vymazať obrázok">Vymazať</a>';
  else echo '<a href="#" id="upload" title="Pridať obrázok">Pridať obrázok</a>';
  ?>
  </div>
  <div class="info">
    <form method="post" name="form" class="form">

    <table>
    <tr>
      <th><?php echo _('Meno') ?>:</th>
      <td><input type="text" name="name" value="<?php echo $name ?>" /></td>
    </tr>
    <tr>
      <th><?php echo _('E-mail') ?>:</th>
      <td><?php echo $email ?> (<?php echo _('nezobrazuje sa') ?>)</td>
    </tr>
    <tr>
      <th><?php echo _('Typ účtu') ?>:</th>
      <td>
        <select name="type" id="type">
        <option value=""></option>
        <option value="1"<?php if($type=='1') echo ' selected="selected"' ?>><?php echo user_type_out(1) ?></option>
        <option value="2"<?php if($type=='2') echo ' selected="selected"' ?>><?php echo user_type_out(2) ?></option>
        </select>
      </td>
    </tr>    
    <tr>
      <th><?php echo _('Užívateľ') ?>:</th>
      <td>
      <input type="text" name="user" id="username" value="<?php echo $username ? $username : $user ?>" class="username" maxlength="30" placeholder="Užívateľské meno" autocomplete="off" <?php if($username) echo 'disabled="disabled"'; ?> /> <span id="user-result"><?php if($user) { ?><img src="<?php echo $url_files ?>/img/<?php if($w_exist) echo 'not-' ?>available.png" /><?php } ?></span>
      </td>
    </tr>  
    <tr>
      <th></th>
      <td>www.<?php echo $url_dom ?>/<span id="url-link"><?php echo $username ? $username : $user ?></span>
      </td>
    </tr>            
    <tr>
      <th><?php echo _('Telefón') ?>:</th>
      <td><input type="text" name="phone" value="<?php echo $phone ?>" /></td>
    </tr>
    <tr>
      <th><?php echo _('Lokalita') ?>:</th>
      <td>
      <input type="text" name="place" id="place" value="<?php if($placeid) echo $city ?>" <?php if($placeid) echo 'disabled="disabled"'; ?> /> <span id="placeset"><?php if($placeid) echo '<a href="#">[zmeniť]</a>' ?></span>
      <input type="hidden" name="city" id="city" value="<?php echo $city ?>" />
      <input type="hidden" name="placeid" id="placeid" value="<?php echo $placeid ?>" />
      
      </td>
    </tr>
    <tr>
      <th><?php echo _('O mne') ?>:</th>
      <td><textarea name="about" maxlength="150"><?php echo $about ?></textarea></td>
    </tr>    
    <tr>
      <th></th>
      <td><input type="submit" name="submit" class="submit mtop" value="Upraviť" /><a href="/moje/profil">Zrušiť</a></td>
    </tr>     
    </table>
    </form>
  </div>

<?php } else { ?>

  <div class="image_my">
  <img src="<?php echo "$url_files/img/profil/no/$imaget" ?>" class="r50" />
  
  <form action="/moje/profil-obrazok" method="POST" name="changes" id="changeimage" enctype="multipart/form-data">
    <input type="file" name="image" id="image" class="hide" />
    <input type="submit" name="submit" id="submit" value="change" class="hide" />
  </form>
  
  <?php
  if($image) echo '<a href="#" id="upload" title="Zmeniť obrázok">'._('Zmeniť').'</a> / <a href="/moje/profil/vymazat-obrazok" title="Vymazať obrázok">'._('Vymazať').'</a>';
  else echo '<a href="#" id="upload" title="Pridať obrázok">'._('Pridať obrázok').'</a>';
  ?>
  </div>
  <div class="info">
    <table>
    <tr>
      <th><?php if($type>0) echo _('Názov'); else echo _('Meno') ?>:</th>
      <td><?php echo $name ?></td>
    </tr>
    <tr>
      <th><?php echo _('E-mail') ?>:</th>
      <td><?php echo $email ?></td>
    </tr>
    <tr>
      <th><?php echo _('Typ účtu') ?>:</th>
      <td><?php if($type) echo $typet; else echo '-'; ?></td>
    </tr>     
    <tr>
      <th><?php echo _('MiniWeb') ?>:</th>
      <td><?php if($url) echo $url; else echo '-'; ?></td>
    </tr>       
    <tr>
      <th><?php echo _('Telefón') ?>:</th>
      <td><?php if($phone) echo $phone; else echo '-'; ?></td>
    </tr>
    <tr>
      <th><?php echo _('Lokalita') ?>:</th>
      <td><?php if($city) echo $city; else echo '-'; ?></td>
    </tr>
    <tr>
      <th><?php echo _('O mne') ?>:</th>
      <td><?php if($about) echo $about; else echo '-'; ?></td>
    </tr>    
    <tr>
      <th></th>
      <td><a href="/moje/profil/upravit" class="abutton mtop"><?php echo _('Upraviť') ?></a></td>
    </tr>     
    </table>
  </div>

<?php } ?>