"use client";

import React, { useState } from 'react';


const CafeSubscription = () => {
      // State for managing subscription selection
      const [selectedSubscription, setSelectedSubscription] = useState(null);
    
      // Function to handle subscription selection
      const handleSubscriptionClick = (subscription: any) => {
        setSelectedSubscription(subscription);
      };
    
      // Function to handle Stripe checkout (replace with your Stripe logic)
      const handleStripeCheckout = () => {
        if (selectedSubscription === 'monthly') {
          // Redirect to Stripe checkout for monthly subscription
          window.location.href = "https://buy.stripe.com/test_fZedUffzt7JbdYQbIK";
        } else if (selectedSubscription === '3-month') {
          // Redirect to Stripe checkout for 3-month subscription
          window.location.href = "https://buy.stripe.com/test_7sI5nJbjdfbDdYQ3cd";
        } else if (selectedSubscription === '6-month') {
          // Redirect to Stripe checkout for 6-month subscription
          window.location.href = "https://buy.stripe.com/test_eVa3fB9b56F79IAdQQ";
        } else {
          alert("Please select a subscription option.");
        }
      };
    
      return (
        <html>
        <body>
        <div>
          <h1>Café Explorer Subscription Box</h1>
          <p>Discover New Coffee & Tea Flavors Every Month!</p>
          <p>Perfect for coffee lovers, tea enthusiasts, and those looking to explore new flavors from around the world!</p>
    
          <h2>What's Inside Each Box?</h2>
          <ul>
            <li>Two (2) Specialty Coffee Bags (8 oz each):
              <ul>
                <li>One Single-Origin Coffee (rotating between light, medium, and dark roasts) [cite: 11, 16]</li>
                <li>One Flavored Coffee (like Vanilla Bean, Caramel Swirl, or Hazelnut Bliss) [cite: 11, 16]</li>
              </ul>
            </li>
            <li>Two (2) Premium Loose Leaf Tea Selections (3 oz each):
              <ul>
                <li>One Classic or Herbal Tea (such as English Breakfast, Chamomile, or Hibiscus Berry) [cite: 11, 16]</li>
                <li>One Exclusive Seasonal Blend (like Pumpkin Spice Chai or Honey Lavender Green Tea) [cite: 11, 16]</li>
              </ul>
            </li>
            <li>Exclusive Bonus Item (Varies Each Month!):
              <ul>
                <li>Could be a coffee or tea-infused treat, a handcrafted mug, or a special brewing accessory [cite: 11, 16]</li>
              </ul>
            </li>
            <li>Tasting Guide & Brewing Tips:
              <ul>
                <li>Learn about the origins, tasting notes, and best brewing methods for your selections [cite: 11, 12, 16, 17]</li>
              </ul>
            </li>
          </ul>
    
          <h2>Subscription Pricing</h2>
          <div className="subscription-options">
            <div 
              className={`subscription-option ${selectedSubscription === 'monthly' ? 'selected' : ''}`}
              onClick={() => handleSubscriptionClick('monthly')}
            >
              <h3>$39.99 per month</h3>
              <p>(includes free shipping!)</p>
              {selectedSubscription === 'monthly' && <span className="checkmark">✔</span>}
            </div>
            <div
              className={`subscription-option ${selectedSubscription === '3-month' ? 'selected' : ''}`}
              onClick={() => handleSubscriptionClick('3-month')}
            >
              <h3>3-Month Prepay - $109.99</h3>
              <p>(Includes free shipping and save $10!)</p>
              {selectedSubscription === '3-month' && <span className="checkmark">✔</span>}
            </div>
            <div
              className={`subscription-option ${selectedSubscription === '6-month' ? 'selected' : ''}`}
              onClick={() => handleSubscriptionClick('6-month')}
            >
              <h3>6-Month Prepay - $209.99</h3>
              <p>(Includes free shipping and save $30!)</p>
              {selectedSubscription === '6-month' && <span className="checkmark">✔</span>}
            </div>
          </div>
    
          {/* Stripe Checkout Button */}
          <button onClick={handleStripeCheckout} disabled={!selectedSubscription}>
            Proceed to Checkout
          </button>
    
          {/* Tasting Menu Highlights */}
          <h2>Tasting Menu Highlights</h2>
    
          <h3>Coffee Tasting</h3>
          <div>
            <h4>Single-Origin Coffee</h4>
            <p>Type: Varies monthly (light, medium, or dark roast)</p>
            <p>Tasting Notes:</p>
            <ul>
              <li>Light Roast: Bright acidity, floral or fruity notes</li>
              <li>Medium Roast: Balanced flavor, nutty or chocolatey notes</li>
              <li>Dark Roast: Bold flavor, rich and roasty notes</li>
            </ul>
            <p>Café Pairing: Croissant (Butter, Almond, or Chocolate)
    </p>
          </div>
    
          <div>
            <h4>Flavored Coffee</h4>
            <p>Type: Varies monthly (e.g., Vanilla Bean, Caramel Swirl, or Hazelnut Bliss)
    </p>
            <p>Tasting Notes:</p>
            <ul>
              <li>Vanilla Bean: Sweet, creamy, and aromatic [cite: 4]</li>
              <li>Caramel Swirl: Rich, buttery, and sweet</li>
              <li>Hazelnut Bliss: Nutty, warm, and comforting</li>
            </ul>
            <p>Café Pairing: Muffin (Blueberry, Banana Nut, Chocolate Chip)</p>
          </div>
    
          <h3>Tea Tasting</h3>
          <div>
            <h4>Classic or Herbal Tea</h4>
            <p>Type: Varies monthly (e.g., English Breakfast, Chamomile, or Hibiscus Berry)
    </p>
            <p>Tasting Notes:</p>
            <ul>
              <li>English Breakfast: Bold, robust, and malty</li>
              <li>Chamomile: Floral, soothing, and calming</li>
              <li>Hibiscus Berry: Tart, fruity, and refreshing</li>
            </ul>
            <p>Café Pairing: Scone (Cranberry Orange, Maple Pecan)</p>
          </div>
    
          <div>
            <h4>Exclusive Seasonal Blend</h4>
            <p>Type: Varies monthly (e.g., Pumpkin Spice Chai or Honey Lavender Green Tea) [cite: 6]
    </p>
            <p>Tasting Notes:</p>
            <ul>
              <li>Pumpkin Spice Chai: Warm, spicy, and sweet [cite: 7]</li>
              <li>Honey Lavender Green Tea: Floral, sweet, and delicate [cite: 7]</li>
            </ul>
            <p>Café Pairing: Cookie (Chocolate Chip, Oatmeal Raisin, White Chocolate Macadamia) [cite: 7]</p>
          </div>
        </div>
        </body>    
        </html>
        
      );
    };
    

export default CafeSubscription;