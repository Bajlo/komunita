<?php

function encrypt2($decrypted, $password='iq@rULa0', $salt='!kQm*fF3pXe1Kbm%9') { 
    // Build a 256-bit $key which is a SHA256 hash of $salt and $password.
    $key = hash('SHA256', $salt . $password, true);
    // Build $iv and $iv_base64.  We use a block size of 128 bits (AES compliant) and CBC mode.  (Note: ECB mode is inadequate as IV is not used.)
    srand(); $iv = mcrypt_create_iv(mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_CBC), MCRYPT_RAND);
    if (strlen($iv_base64 = rtrim(base64_encode($iv), '=')) != 22) return false;
    // Encrypt $decrypted and an MD5 of $decrypted using $key.  MD5 is fine to use here because it's just to verify successful decryption.
    $encrypted = base64_encode(mcrypt_encrypt(MCRYPT_RIJNDAEL_128, $key, $decrypted . md5($decrypted), MCRYPT_MODE_CBC, $iv));
    // We're done!
    return $iv_base64 . $encrypted;
} 
    
function decrypt2($encrypted, $password='iq@rULa0', $salt='!kQm*fF3pXe1Kbm%9') {
    // Build a 256-bit $key which is a SHA256 hash of $salt and $password.
    $key = hash('SHA256', $salt . $password, true);
    // Retrieve $iv which is the first 22 characters plus ==, base64_decoded.
    $iv = base64_decode(substr($encrypted, 0, 22) . '==');
    // Remove $iv from $encrypted.
    $encrypted = substr($encrypted, 22);
    // Decrypt the data.  rtrim won't corrupt the data because the last 32 characters are the md5 hash; thus any \0 character has to be padding.
    $decrypted = rtrim(mcrypt_decrypt(MCRYPT_RIJNDAEL_128, $key, base64_decode($encrypted), MCRYPT_MODE_CBC, $iv), "\0\4");
    // Retrieve $hash which is the last 32 characters of $decrypted.
    $hash = substr($decrypted, -32);
    // Remove the last 32 characters from $decrypted.
    $decrypted = substr($decrypted, 0, -32);
    // Integrity check.  If this fails, either the data is corrupted, or the password/salt was incorrect.
    if (md5($decrypted) != $hash) return false;
    // Yay!
    return $decrypted;
}

function randString($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, strlen($characters) - 1)];
    }
    return $randomString;
}

function encrypt($str){
    $key = "zvSK14";
    $result='';
    for($i=0; $i<strlen($str); $i++) {
        $char = substr($str, $i, 1);
        $keychar = substr($key, ($i % strlen($key))-1, 1);
        $char = chr(ord($char)+ord($keychar));
        $result.=$char;
    }

    $result=base64_encode($result);
    $result=str_replace('+','zVeReyn1',$result);
    $result=randString(3).$result.randString(2);
    $result=urlencode($result);

    return $result;
}


function decrypt($str){
    $key = "zvSK14";
    $result='';
    $str=urldecode($str);
    $str=substr($str,3,-2);
    $str=str_replace('zVeReyn1','+',$str);
    $str = base64_decode($str);

    $result = '';
    for($i=0; $i<strlen($str); $i++) {
        $char = substr($str, $i, 1);
        $keychar = substr($key, ($i % strlen($key))-1, 1);
        $char = chr(ord($char)-ord($keychar));
        $result.=$char;
    }
    return $result;
}

function get_menu_items($slug=false) {
    $menu = [
        'firmy-sluzby' => ['id'=>'2','slug'=>'firmy-sluzby','title'=>'Firmy a služby'],
        'praca' => ['id'=>'1','slug'=>'praca','title'=>'Práca'],
        'byvanie' => ['id'=>'3','slug'=>'byvanie','title'=>'Bývanie'],
        'doprava' => ['id'=>'4','slug'=>'doprava','title'=>'Doprava'],
        'bazar' => ['id'=>'5','slug'=>'bazar','title'=>'Bazár'],
        //'udalosti' => ['id'=>'6','slug'=>'udalosti','title'=>'Udalosti'],
        //'zoznamka' => ['id'=>'7','slug'=>'zoznamka','title'=>'Zoznamka']
    ];
    if($slug) {
        if($menu[$slug]) return $menu[$slug];
        return false;
    }
    return $menu;
}
    
function get_menu($search=false,$active='') {
    $menu = get_menu_items();
    if($search) array_unshift($menu,['id'=>'','slug'=>'','title'=>'Všetko']);

    $sections = [];
    foreach($menu as $key => $item) {
        $slug = '/s';
        if ($item['slug']) $slug .= '/'.$item['slug'];

        $return = '<li';
        if ($item['slug']==$active) $return .= ' class="active"';
        $return .= '>';
        $return .= '<a href="'.$slug.'" class="section_'.$item['id'];
        $return .= '">'.$item['title'].'</a></li>';
        $sections[] = $return;
    }

    return $sections;
    
}

function section_id($slug=false) {

    if($slug=='praca') return 1;
    else if($slug=='firmy-sluzby') return 2;
    else if($slug=='byvanie') return 3;
    else if($slug=='doprava') return 4;
    else if($slug=='bazar') return 5;
    else if($slug=='udalosti') return 6;
    else if($slug=='zoznamka') return 7;

    return false;
}

function slug ($string) {
    $table = array(
        'Š'=>'S', 'š'=>'s', 'Đ'=>'Dj', 'đ'=>'dj', 'Ž'=>'Z', 'ž'=>'z', 'Č'=>'C', 'č'=>'c', 'Ć'=>'C', 'ć'=>'c',
        'À'=>'A', 'Á'=>'A', 'Â'=>'A', 'Ã'=>'A', 'Ä'=>'A', 'Å'=>'A', 'Æ'=>'A', 'Ç'=>'C', 'È'=>'E', 'É'=>'E',
        'Ê'=>'E', 'Ë'=>'E', 'Ì'=>'I', 'Í'=>'I', 'Î'=>'I', 'Ï'=>'I', 'Ñ'=>'N', 'Ò'=>'O', 'Ó'=>'O', 'Ô'=>'O',
        'Õ'=>'O', 'Ö'=>'O', 'Ø'=>'O', 'Ù'=>'U', 'Ú'=>'U', 'Û'=>'U', 'Ü'=>'U', 'Ý'=>'Y', 'Þ'=>'B', 'ß'=>'Ss',
        'à'=>'a', 'á'=>'a', 'â'=>'a', 'ã'=>'a', 'ä'=>'a', 'å'=>'a', 'æ'=>'a', 'ç'=>'c', 'è'=>'e', 'é'=>'e',
        'ê'=>'e', 'ë'=>'e', 'ì'=>'i', 'í'=>'i', 'î'=>'i', 'ï'=>'i', 'ð'=>'o', 'ñ'=>'n', 'ò'=>'o', 'ó'=>'o',
        'ô'=>'o', 'õ'=>'o', 'ö'=>'o', 'ø'=>'o', 'ù'=>'u', 'ú'=>'u', 'û'=>'u', 'ý'=>'y', 'ý'=>'y', 'þ'=>'b',
        'ť'=>'t', 'ň'=>'n', 'ľ'=>'l', 'ĺ'=>'l', 'Ť'=>'T', 'Ň'=>'N', 'Ľ'=>'L', 'Ĺ'=>'L', 'ď'=>'d', 'Ď'=>'D', 
        'ÿ'=>'y', 'Ů'=>'U', 'ů'=>'u', 'Ě'=>'E', 'ě'=>'e', 'Ŕ'=>'R', 'ŕ'=>'r', 'Ř'=>'R', 'ř'=>'r',
    );
    $string = strtolower(strtr($string, $table));
    $string = str_replace(explode(' ','@ | > < ~ # $ ^ ? ! .'),'',$string);
    $string = str_replace('_','-',$string);
    $string = preg_replace('/[^0-9A-Za-z- ]/i','',$string);
    $string = trim(preg_replace('/\s+/', '-',$string) );
    return $string;
  }
