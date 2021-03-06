<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use GuzzleHttp\Client;

class ReCaptcha implements Rule
{
  /**
   * Determine if the validation rule passes.
   *
   * @param  string  $attribute
   * @param  mixed  $value
   * @return bool
   */
  public function passes($attribute, $value)
  {
    $client = new Client([
      'base_uri' => 'https://google.com/recaptcha/api/'
    ]);

    $response = $client->post('siteverify', [
      'query' => [
        'secret' => config('services.recaptcha.secret'),
        'response' => $value,
        'remoteip' => request()->ip()
      ]
    ]);

    return json_decode($response->getBody())->success;
  }

  /**
   * Get the validation error message.
   *
   * @return string
   */
  public function message()
  {
    return 'Xác minh recaptcha không thành công. Vui lòng thử lại';
  }
}
