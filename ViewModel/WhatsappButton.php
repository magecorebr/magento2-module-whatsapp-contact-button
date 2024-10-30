<?php
/**
 * @copyright (c) 2024 Magecore
 * @url https://magecore.com.br
 * @author Marcio Maciel <os@magecore.com.br>
 * @license See LICENSE.md in the module root directory for license information.
 */

namespace Magecorebr\WhatsappContactButton\ViewModel;

use Magento\Framework\App\Config\ScopeConfigInterface;
use Magento\Framework\View\Element\Block\ArgumentInterface;

class WhatsappButton implements ArgumentInterface
{
    /**
     * @var ScopeConfigInterface
     */
    protected ScopeConfigInterface $scopeConfig;

    /**
     * @param ScopeConfigInterface $scopeConfig
     */
    public function __construct(ScopeConfigInterface $scopeConfig)
    {
        $this->scopeConfig = $scopeConfig;
    }

    /**
     * Get WhatsApp phone number
     *
     * @return string
     */
    public function getPhoneNumber()
    {
        return $this->scopeConfig->getValue('contact/whatsapp_button/phone_number');
    }
}
