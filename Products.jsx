import React from 'react';
import 'tailwindcss';
function Products() {
  return (
    <div className='mt-10'>
      <div className="mt-12 p-6 shadow-lg shadow-orange-300 bg-white">


        <h2 className="text-3xl font-sans text-center mt-4">Fire Safety Products</h2>
        <p className="text-xl font-serif mt-4 text-center md:place-content-center">
          At ZEEVA Fire Solutions, we supply a wide range of advanced fire safety equipment designed to prevent, detect, and suppress fires effectively. The supplyed products are industry-certified, reliable, and designed for homes, businesses, and industrial spaces.
        </p>
        <br/>
        <h2 className="text-3xl font-sans text-center">Fire Extinguishers</h2><br/><br/>

        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-3xl font-sans text-center mb-6">Essential for Controlling Different Types of Fires</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { type: "ABC Dry Powder Extinguishers", use: "Suitable for wood, paper, electrical & flammable liquid fires", image: "https://5.imimg.com/data5/HD/MS/MY-45738489/dry-powder-abc-fire-extinguisher-500x500.jpg" },
              { type: "CO₂ Fire Extinguishers", use: "Best for electrical fires & sensitive equipment", image: "https://www.mollimax.com/image/cache/catalog/products/co2/co1-1500x1500.png" },
              { type: "Foam Fire Extinguishers", use: "Effective on flammable liquids & solid combustibles", image: "https://th.bing.com/th/id/OIP.8n6pDdANJC3i0LMHBT_DjwHaM4?pid=ImgDet&w=190&h=330&c=7" },
              { type: "Water-Based Extinguishers", use: "Ideal for Class A fires (wood, fabric, paper)", image: "https://th.bing.com/th/id/OIP.a-sY2a_aLH_Ie7y5CpP24gHaHa?rs=1&pid=ImgDetMain" },
              { type: "Automatic Fire Extinguishers", use: "Activates instantly upon fire detection", image: "https://fireguardsg.com/cdn/shop/files/2.5kg-automatic-fire-extinguisher_0e4d85ba-58df-46ea-984a-8b0fef83ab08_700x700.jpg?v=1682872937" },
            ].map((extinguisher, index) => (
              <div key={index} className="bg-white hover:scale-105 shadow-md rounded-lg p-4 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
                <img src={extinguisher.image} alt={extinguisher.type} className="w-32 h-32 object-contain mb-4" />
                <h3 className="text-xl font-sans">{extinguisher.type}</h3>
                <p className="text-gray-600 mt-2 font-serif">{extinguisher.use}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center ">
            <h3 className="text-lg font-semibold">🔥 Available Sizes:</h3>
            <ul className="flex justify-center space-x-2 mt-2">
              {["1kg", "2kg", "4kg", "6kg", "9kg", "Large-scale trolley-based units"].map((size, index) => (
                <li key={index} className="bg-gray-200 px-3 py-1 rounded-md text-sm">{size}</li>
              ))}
            </ul>
            <p className="mt-4 font-medium">🔧 Refilling & Annual Maintenance Available</p>
          </div>
        </div>

        {/* <p className="text-xl font-light mt-4 place-content-center">
          Essential for controlling different types of fires before they spread.<br />
          ✔ <b>ABC Dry Powder Extinguishers</b> – Suitable for wood, paper, electrical & flammable liquid fires<br />
          ✔ <b>CO₂ Fire Extinguishers</b> – Best for electrical fires & sensitive equipment<br />
          ✔ <b>Foam Fire Extinguishers</b> – Effective on flammable liquids & solid combustibles<br />
          ✔ <b>Water-Based Extinguishers</b> – Ideal for Class A fires (wood, fabric, paper)<br />
          ✔ <b>Automatic Fire Extinguishers</b> – Activates instantly upon fire detection<br />

          💡 Available Sizes: 1kg, 2kg, 4kg, 6kg, 9kg, and large-scale trolley-based units<br />
          💡 Refilling & Annual Maintenance Available<br />
        </p> */}
<br/>
        <h2 className="text-3xl font-semibold text-center pt-4">Fire Suppression Systems</h2><br/><br/>
        

        <div className="p-6 bg-white rounded-lg shadow-lg">
  <h2 className="text-3xl font-bold text-center mb-6">Automatically Detects & Suppresses Fire in High-Risk Areas</h2><br/><br/>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
    {[
      { name: "Water Sprinkler Systems", description: "Heat-activated automatic fire control", image: "https://th.bing.com/th/id/OIP.LWeLHoksC-WAZ05e6nrhUQHaE6?w=261&h=180&c=7&r=0&o=5&pid=1.7" },
      { name: "FM-200 Gas Suppression", description: "Non-toxic, suitable for server rooms & electrical areas", image: "https://c8.alamy.com/comp/2DBDY6A/fm-200-suppression-systems-fm200-gas-flooding-system-in-data-center-room-2DBDY6A.jpg" },
      { name: "Kitchen Fire Suppression", description: "Specialized system for restaurants & commercial kitchens", image: "https://cdn.website.thryv.com/7e6419e0cf1c48dba2df1962bdbaf4c3/dms3rep/multi/Commercial+Kitchen+Fire+System++++++++++Construction.jpg" },
      { name: "CO₂ Flooding Systems", description: "Ideal for industrial spaces & hazardous zones", image: "https://th.bing.com/th/id/OIP.47Oa3fva9h7YJAJSCqf0mgAAAA?rs=1&pid=ImgDetMain" },
    ].map((system, index) => (
      <div key={index} className="bg-white hover:scale-105 shadow-md rounded-lg p-4 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
        <img src={system.image} alt={system.name} className="w-32 h-32 object-contain mb-4" />
        <h3 className="text-xl font-sans">{system.name}</h3>
        <p className="text-gray-600 mt-2 font-serif">{system.description}</p>
      </div>
    ))}
  </div>
</div>

        {/* <p className="text-xl font-light mt-4 place-content-center">
          Automatically detects and suppresses fire in high-risk areas.<br />
          ✔ <b>Water Sprinkler Systems</b> – Heat-activated automatic fire control<br />
          ✔ <b>FM-200 Gas Suppression</b> – Non-toxic, suitable for server rooms & electrical areas<br />
          ✔ <b>Kitchen Fire Suppression</b> – Specialized system for restaurants & commercial kitchens<br />
          ✔ <b>CO₂ Flooding Systems</b> – Ideal for industrial spaces & hazardous zones<br />
        </p> */}
        <br/>

        <h2 className="text-3xl font-semibold text-center pt-3">Industrial & Commercial Fire Protection Equipment</h2><br/><br/>
        
        
        <div className="p-6 bg-white rounded-lg shadow-lg">
  <h3 className="text-3xl font-bold text-center mb-6 p-3">Advanced Fire Safety Equipment</h3>
  <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      { name: "Fire Hydrants & Hose Reels", description: "Critical for large-scale fire emergencies", image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCADCANADASIAAhEBAxEB/8QAHAAAAQQDAQAAAAAAAAAAAAAAAAMEBQYBAgcI/8QARhAAAgEDAgMFBQUECAQGAwAAAQIDAAQRBSESMUEGE1FhcRQiMoGhI0JSkbFicsHwBxUkM1NzgpJkotHhNEN0srPxRJPS/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAMBAgQFBv/EAC8RAAIBAwMCBAQHAQEAAAAAAAABAgMRIQQSMQVBEyJRcTJhkcEjM4GhsdHwFOH/2gAMAwEAAhEDEQA/AOt0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUVjNQmt9p9F0JcXMpkuSMpbQYaU/vdAPWobsXhCU3tirsm6RnurS2GbieGIcx3rqpPoCc1yfUO3GvaizLFONNsyw4haqHuODO543I3+YqQ07Tuyl5F7Vde3XDn72tyyKz534khRghHotQnfg3f8LhHdVf0yXaTtP2YjYq2p2+RzwWI/PFLwa7oNz/AHGo2r+r8J/5sVXbWy7GgKvsOlYPT2Li2zz4u7/jTiTs92FuFeR7PTI158aH2Vl8w2Vq21i5U6Cxn9i1K6OoZGVlPJlIZT8xtWa53NYafpbB9A7VNbOu4t7iV7y233xlVYgU+te2dxbRyx6xaI1wigwPZOOG5B5MY3wyjrk/LPSG7clFp3P8p7v5LtWks0ECl5pYok/FK6ov5sRXP5+0HafVCRAyWFs3IRD7Qr5ysOLPoBTVdKjkbvLqaaeU7lnYkk+bMS31qE2+EPjorfmSt7ZL+dX0QHh/rPT8+HtMP/8AVOYbm1uBmCeCYDmYZEk/9hNUOPTdKQYKJnrxM36ZpdNK0gkMIAP2oZGVh6EVa0gempdpP6f+l6rNVmAana8PsWotKgx/ZtVzIpHglwvvjyzn0qVtNTimkFtcRSWl7jIgnIIlA5tBIPdYem/lRxyZJ0XHjJI0Vgb1mgSFFFFABRRRQAUUUUAFFFFABWDRmqB267WGwR9H0+TF3KuLuVDnuY2+4P2j1qG7DaNJ1ZbUa9ru3SWTSabo7q91uk9yu6xHkVj8T51zB5J7iRpriVmklbLvIS7sx8s5J8qSjSSWThRS8rknGd/Mknp41OQCy0tRNJwzXfPiwQsYPRPAefM+QOKok5Hb30tHH5+nd+4707S7jgWYIluigMbi/wANMMb5WEEIv+ps+VPlltu8aG3ur68ud3YxyLBCg5cbuoUAfI/Oq2dQ1LWJ+5ikCxRbyyMPsbdDyCoNuI9B+ewqWidLaL2e14kVTxTTEgyNJjHET1f6DoByLVFI5VXV1Kj5sWK3uLuDAe/vmlwGMMV1OI499uPLD035/hpO8voOLiu5ZJ7g4wgJkkJOwXfl4c/lVWu9Y9mQxxEhjt7mS5ZttupY+PP9K2tYLoPmf/xsmfswxxaI2xUn/EP3z05DmaJzUURp6EtRO18d2TD3kznureKMTE4JX31h9G+EsOpxgdMnenFtZxRZlmIeQks7yHIydyfe5nzrW2gjt02GWbY4HvOR0HlTpRkgtglfhx8K+g/jVEu8uTr2UFtp4QsryNjuhgfjkB39F50qIS+O8mlbPQHhX8hWik7UspNMKexlbK1PNDy6s1BsIRvG8sbdCjmt1ZqXTJ60FbtZEopdVtfez7TF1DbPgeBqSt7uw1KEwOpYLgmGQ8MsTDk8bcwR0INJKQBTe4tFlImhJjuE3WRdt/A4qbWKNRlzgsFndzQSQ2t5KZEmbgs7tgAZGxnuZwNhJ4Hk3rzl6qFnei5WayvExJw8M0ecd4oOQ6HoRzB6VOabeO5ks534ri3AZJCMe025OFlA8R8L+Y8DVWc+tRcXck6KKKgzBRRRQAUUUUAFFFYoAg+0+uRaDpc11kG5kzDaIfvSkc/Qc64NJLcXc8k0rNLNPIWJJyzux86s/brWjq2sywRNmz08tbQAHZnB+0k+Z2HpUXplpwxtfSDChWEOfwj3S/z5D/vSviZ26ajpaO58/f0/QyipYQMSQZ3UGRvDG+B5Cof+06lcdxESFzmWTmEXqa31G4lmmEEeS8jAADzqbsLRdPs+IrmR1yxPi3wls/nT1jCOPObnJylyEcUVtHFZWi4GSXfmSSPedz4+P5UnfXUdtFwKR7oIHifXzNOIl7q3e5fIecBlzzEXNQPX4j6jwprZWkl3cpcuAF7xktFf4S654p2H4U3I8wfw0N2KRTk7INPtDABqN0M3TsUtIzuIj1fH4h9CcdDVgtIBGpYg8RxxHmTn7o9aZwj2ifiUHuoQI4AR0B2J8zuT5mpX4QuMbZ4T67E/Pp/3rPF7nuZ6eNJUIKkv19zcE9ccRABxyA/Cvl+tKr0pAE7etbSSxwJxucDOFAGWdjyVR4025Vq47Unn0AyT0A862SeJjhCZCDv3YJUerHb60xjjmuAr3J4Y+aW6nbHjIRzNP0CqFVQAo2AGwHyFSrlJRSwP4UgfHeSd364bHyWpGPThLj2a6t5Tz4eLhf8A2moVTSqkg5BwRyI51czyjJ8MfyxzQMUlQq3PB/hWAeX1pWDUeJRBer30O2GO8kfTKmi5gMBRkYPDKOKKReTDwPnRcUm09suRheQu3DcQ+7cQniQj7w6qacw3bSxWt9AM3FqzPwdWGMTQH94cvMCsZzTKM+y3uFOIrrceCzL4etVZpUVOO1l6hliniimiYNFKiyRsOTIwyDSlQmhzcIvLHktu63FuOQEFwWbhH7rBwPLFTdQcWpDZJxCiiigWFFFFABUJ2n1Q6RouoXakCZk9ntv86X3QR6bn5VN1zD+k3USZdL01TtHG95KAfvse7TP1/OolwP08N9RfU57bW8t7d29oje/cyrGzn7gOWeQ+gBPyqzasYLa2WJAEijiEpUc1iReGNPy/Wm3ZO2jeXUL1+UMUVnESNu8ucvKwJ6hFx/rpj2muyycK54ruUsFHPu02VRj5flRBdzTrp+ZU/T+RPs1p/t1zdajcjNvAWYg8nbfCD1Ox8s+NTd3Ebu7t7Ek4kfiuMfdTHeycv2QaltOsU0vS7W1YYZFL3RJ+KSMccgOPBjw/6KZ6Uvf3eo3Dj4Uit+LwecmeT8lVf93nTDnDfUIRNNDar7q8BnuCNuBCcBRjrjZabl1SK5eJcIx/q60AzwiNArSlT5Aon+pqdanKLWG6mP8AfXLsQBzCKCAPkNuXMmmpjMcttaZyLGBYpMcjcMTLMf8AczD/AE0mq8W9TpdNpbqu98RyPbRBFGp+WR+ZNLl+I9PLyFJn3FC9eX5bn+fKhTvVeDtW7ixdY1d3OEQcTHyFJ28bTst1OP8A08Z5RxnrjxNN3PtFwsG/dRcMk/gx+6hqQB5VPJD8q+YupxjFKo2TTXNbKznkcedXTFND5TSo+VMlDbfaNn6UszmJEZ3XDusSZIDO7ckReZJ8BVri3EdZ6U9s7gcLWkx+ylOUJ/8ALk6EevWo5WznIZWBwysCGB6gg71tkeNSmUcE0Om4kZlbmMimt2peFiPjjIkQ+a70s8nGEfqRhvUUizkgjHl/1qGy8E0x9pt2FvtKnBHDcB7OT0mXjT8mUD/VVxrmsTvDBMy/HZyiZPH7F1nH6V0hWV1VlOVYBgfIjIqqZg19PbJSX+/1zaiiipOaFFFFAAf41wXtlem+7Q6swJKxzezpnosQC/8AWu7yuI45ZDyjR3Poqk15svZ2mvL2c85J55D82LUub7HU6fC7cvYtujYttA4xkNcvd3G+2eORbRPopx61DQRrfdpbUMpMOmxi8lVsf/jgOisPNygPrUp3oh0fT4MjK29nxA/5RlY/mxqP7O8BvNXuHAzNdWtmuNzwcRkcA7dQlNirIwVpbqkn8y16pJ3VrLHxZbggtuI82d/tZG/Mk027PhnsJZ0V2Mt1fXLcCM4Ve8FpGW4QdgI8/wD3TXW7v7IyFtg11dbkADchWyKlLOfVuz3ZTTWjhESX9tHExuAqXPvoZWlUKcgbkDPjnA4tolLaLSuVu7uI7zV7KINmBJ+NhzHs1oGuZCfXhP50rZlnaSeQ5aR3mcnqd2P8aapNYzvqV7EWNwLSS24cbRJLJHAWkPWRgHJI2x9HtouI15fCmfz4jSHLdI9DoKeyk36sdE5OOowPn1oLKiu7H3VUsfkM0nkk5pK7JaJIhnM0scXyJyansa+XYXslKxd449+djM/+rl9Kdg8qRyBgdBsPlW6nJH19KlYIauxVSPb9EScuunPcMdRaLJkEYX3BsC3CT8WBn+Dqb2ZZ5hbljbiR+6LZyUztnO9MOLibfl0pZSTsPkKsKcPNuuOFf9aUKLJPplxxMsmnXa3kGMFSwHCVcMORHPr50wWYPx92e8CfGYvfCfvFMgUvHLnBzUplZQvhkjcTO9xJcNjM7s8mOQY77CsFh0puzhlxWOPYUXJjCysOQ/3TyJPXrzrHHTcufqD9azx70XGbDIJMl2nSSMfPiBU1fdJk73TNKkznisrYn1Eag1z5WxOD4oPoavHZ0ltF0rPSFl+SyOoqI8mHqUfw4v5/Yl6KKKucMKKKKAGWqOU0zVXHNbK5I/8A1tXm1jkyn98/nmvSOrjOlawP+Buv/javNh5v6MKVPk7fTvgfv9ixXkuLeNQdwsQx5BFFNtDcxxoTnLajJIcnqvCP4VrdtxQxkfhU/LApHSu9b2SGIcUst40MS4J4pJHwowN+tP7HFlmTLtomhp2kuZFvDKml2duVuGicxNJPISyxq/kPeb5eNIds9U9plFpBIzWsUfs0AdskJEBxOScklup8quF0LTs5o0GmRsDIIuOdwQHld8lpCOfvHOPl4Vy3UGMxuLhviBCKABwqpyTjHWsF3WqW7Gin+Gtw2045h1QgnEl5ZRLnfaOOVz+oqwRkhFHiWP8AtXH8arum7QyjPPUGz/pijA/WrAD7oH7Mn1ZBTG/Mz0eljahD2/sUBpKQ8V1Zr+ASy/TArYE7UmT/AGyL/wBO/wD7qs+Blh5nzrdThHPov5mkc1nj9zG2CST8iKLkWN+NUDMxAVQWYnoBUNe6s9wfZYm7mBz9u43kaIbkZHj4CttVuSkKRKf7wlm8wuMfz5VXuPLPvuVOPM86pJvhDoRW3cy4aX2ivdOKR6eIYY4yRwtGH4wdjxnNS5k9pxdgW6G4YsUt2Bi7zmVC/ErdeEj0J5VQbW4KSRunCzIyyBH3VipDYYeB5GrFcy28d9IbXazuClxAqk4WOQBwm+/u7r8qV4ko8l3RhKSaXPcnA2wprNqUVvIYmjdsAHKMOozgg04WKeW50qyjAabVN7VmPChRVLs7MB0wc7dKgdSVoby5jbZkfhcZyA4GDg0ypNxjdBpqdOdRweSVTVLWVhGscgZuRJGAR72T+VOILpLlBKilVJYcLEMwwcbkVWYHHeE5+CKd/wAkI/jUnpRHdSvndnCnfbAG2KpTqyk8mqvp6cY3iSwf7Qfu/wAavvZ33dD0kkgAws2TsPekdhua533mGkY8lX9Mmtdb1C/srzTILS7uIDbaLpcTIGYROzRd6WCbp97qOlaN23JxtXp/HUaadu/0OuF0GcsowCTkjYUBgwBBBHQggj6VxQa32lY4GqyEnmOIfoI8VfezF0817MS0jrPaFgWLEL3ci887b8W3pUxqqTscqt02VGDm5cFwoooppyxG6j722u4v8WCaP/chWvM8qlJpkPNZJFPyJr06enrXnXtHaGx13WbfGFS8mKfuMxZfpS5o6/TZfFH2Yk7F7WE537sD6DNSHZa/t9PnNwIrVr20kknga6MgV2dfhUg8IJGw2+YzUXCc2+NsoSPrmmkbmOdgc+8m2T95Dt9KZ8SOdWjsqyT9S16t2lmvFv7qRCt9MwTu5FUrEg3GCeY8KgbSVpNP99sse8yW3yVduf51i7YupOc5TbPMDntTbTX9y4hOTwyBuY5OOE4z6VWFNQ4KSk5WQ800junHhfOT6GKPFWAH3V9JB8wUNV2wOBeJ1WeCQejK6H9BU+hyo8if+ZSf4VnfxM9VpHehD2/sUU8qTY4u4D4xOo/PNZBpOc8DW0p+7IFPo21S3gcOyaSlY8VmvGiLLeQW7u/wokx4Sx9K2Jpvdsns9xxk8PAeXPiBBXHzxVikk3hDPtGkMGpXNpBOJ4bUiNJVKniJVWbddjg5GR4VA4y385pxPK0zs7Y4mxnGwzypqSc0u/c0bdkFGWbEzbw6Z7PKSsguGU93h/dDgbMeKtlL8ETBXPC3D7qsd9jjYU0twXVQAcg5yOY26U9ke5jWMCaRSufgcEb9Rw7VmqPcx0EoeVdyzr7ZeaboC27pDfWE920TySNC6q2CMNjIz06bmqzNKWZy7MzkniJ397PjUhpbu10RLI7gxuMyOx4SFzxAg07Ol2sUrxyWkXEsjoRO7yHIJGACfyq805kaecad0V5JAFuDnJYRwqBucs3GcAeQqa0lZhDLxRyLlwR3ilMjHTixUmIUtuFSiwcSd4ojgEeVPJuQOK0a5sQfeYvtyd8nbyFSouLuTOtGSsYKllkUsAXBG3vHDDHSt+0r/wBb3dvc2ltcrHDaQWipw8bERMxDe5t18elJtrFnB8McSnDY2znfO/EfltTSTtHfP7sXcgch3R3z6ip3Phsz1IbmpJWa9WRUX942eYO+c7HPhV+7AtieZN97W5xnwSdD/GqGt200kh7qEFieJgvvMeecnerv2BbN9L+zbXox597CavTwzJrM0Jex0miiith5QDXHP6TtOMGr2t+q/Z3tsoY4272I8B+nD+ddjqrduNHOraHc92vFc2R9sgx8RCjEij1G/wAqrJXRq0tTw6qfZnD7dscS/iAPzFIXQKOsgAyuH9V61sOJGB6g8qVmw8Ybbb9DRB4saeo0ts1UXc2DB4lI32xTOBu7u1B+GUFD68x/PnW1s3DxxHO3vJ5rWk6kNxLkEHiHkRvTDmD+A8NxOB/5kJfH7UbB/wDrU9A44Af2Vb8iCfpmq2kg723m6Ejj9G91h9TU3aPwjgO/dMVPmtZKuJ+56Tpk91Hb6Md/CSD0JrEy97FInUj3fHI3FDbHfny9SNs/x+dY4iKrc6NjaGXvIkb7wGGHgw2NJzqJY5I8/GMA+B5g0mG7mQ/4cu/o1KMamLuhUsZK7KrIzq3NSQfUU3POnc64kkycnjb9fOm5AqiNU/Mrjy3MoW3KcIXiJcnnjpw1IXDRuIuGMIwDB8feI3zimdqp9lkf3s96ixn8I5krnx60qqOBxMGLH93+BpU1ZsiLba+RIac4WdGwCeFzwnkfdIION6mJNVSEuh1C2typIdbVWaQHkQXiQt5btUJp6zGdAqjOGGWYY6/hyfpTO9iCXV0gOQJWLHzb3sbeGcVZNxRRU1UwyWbUtGaQl/bbpzzLKkanHnK7H/kp0l7Z4tlhsIgZcsRNLI+I1zklYu7Xy5VWYlIbw8albNZD7yKWkkZYYF5lmZgoUepxVoyuWlSillnQ+yFhb3qX95dWVk0SSpbWq+ywgBkHFIwPDnqBz6Gmn9IOiXUltFqdsbOKysIO7uIuDglLSzKoZCi4I3AIJGPnV00iwXTNOsbIHJgiAlb8crHjkb5kmmHa9O87N62uAfsYmwcAHgnjbcnbpWq1onlXXctTvjxf9ji9rBcyspiRuD/EMbCL/c21XHs1d2+h3AuJ5ZJQ0dwkqRIpJMhQgqTgbYqGb2oToMx+zpFwkHJlEg2wOmKVB2+dZU7O56Z0lUg4y4L9J20sArNFY3rorIrM3dIAz54RnJGTg436eVWS1uIru3t7qE5injSWMkYPCwzuK5LawzXs1rp8bAe03cPDx54FlUMqykDqoLY9fy6xY2kVjaWlnEWMdtEkSlviIUcz5nnWmnNy5PPa7T06Fox5+w5rB36euazRTTmHDe23Z46NqjyQoRYXpaW3IHuofvR5/Z/THjVXjIB4Wxg5G/KvQ+taPZ63YT2VyMB/eikAy0MoHuuP4jw+nB9W0m+0i8msruMpJGx4GG6yIeTofA9KTK8Xc7NCpHU0vBnyRdxC0bq6c/iQ9D4qaySsqAgc9x4jypyiiZSjcx18h1232pLumjcxttk7eGfEetOTTV0cmpTlTk4y5EYhlZI/DLDffwOKlbSU/Zsx5ju5P3l2z+lR7RvGyyKACDv5EbbjwNOrbgcuyZAPxoTko3T5eBpVWO5XNugr+FVs+GTqo0qSEEZiTiI3yQCBt8ufoPGkq0trpoXjYj4dmzyK9QacXSLHiZMGCX34yvIZ5qfSkLKPS5vkQZQylTyNJBih4H3Azgjfag3MfLek3micEFW8QfA+Iqu5E+HJ4sbNHFJgsiP5kA/WtRb22ciGPP7opNJcMOMMRncoQrH6EfSnaSWf+Lcjx4o4ifzUirKaKOjO9jdUBUrgYxjBG1IpZyuwRW4jzIDYCj8TEjAHqaX9os1zwrcSHpxlI1/JN6RmuZpU4ThIs5EcYwp9epqknc0wpSSsYFxFC2EBYqeaHAO/j/2pjgYf+etbtsQcUHbiGM55edUTu8l3FRwjCDJGPnV87D6V7bfC/kX+y6ZgRZG0l4y5GP3AcnzYeFVLR9Mu9WvoLK2HvSEd5JjKwx9XPp0ruOnafaaXZ21lapwwwJwjPxOx3Z3PUk7mtFKF8s43UtUqcPDjy/4HlMdWsf6z03UbAOIzd28kAcjiCMw2YgEfrT6jw9a1Hmk7O6OF24khM1qz8QtXaAbEAFHdW4QTnGc4pwG5/wA9a0lHDf6wP+PvPlieSgda58sM9xQ81NMlNEYjWdEP/HQj/dla60K4/pUixapo8rMFVL61ZixwAvGASTXYBWihwzgdYVqsX8jNFFFaDihUPr3Z/Tdfte4ul4ZUB7i4QDvYWPhnmPEf/dTFFQ1cmMnF3RwHXOzus9nZx7TGWty5FvdxAmKTwBPQ+IP1pjxW92oRgEnwRgbKx/Zz+leiJoYLiOSGaNJIpFKyRyKGRlPRlO1UbVv6NdGuy8umTvYSnJ7oqZrYnyUkOPk3ypag4vym56iFZbavPqcxRMgQzLiT4Y5DjhkA+6f2h/Pm2ZJbWUSoPh2IIO4PMNVsuuwfbe0JWOC11CLkDDcIrY9LjgP1NM27PdrBiO40HUvwq6JFNjyYxOdvOmpmOUNrw7kerxXEffQ7YwsyfejboSPA9Kc2l0kQa2uhx2svPHxRnoy1GT2t5p9yw4JILiPIkimR0JU81dGweE/zyyHcfd3aM8Yw6bzQ5y8Wds56r4H89+eacXF7keg0GsjUj4VTk3vbCS1IdSJLaTeKZN1YeBx1pnUha3lzZ8UZVZrZ/wC8gl3Rh5eBpc2mlXnvWlwLaVudvdfDnwSSs7jfMTuxqOCtPj1IoClOH+elO5NK1OLdrZ2Xo8WHU+funNJraXeQpgnUHqYn2+lRtfdD98GsMRHXHPkaeQ2csyjPujHulh8WfCncNrDCAxid358U2EA+ROfpSskjMCGb3SMELkDHmef6U2MDFVrt4iRU1pwuwDK4UYZlGQGJ+EY5nyFZXSrthGFGZp3WO3gGWldm5DC/Wn8QlmmitrSF5rmU8ESRjLN6DkAOp/M10fs32ZXSwLy9KTanIuMrvHaoRvHFnr+Jv4c2KnuOdqda6McvIt2X7OxaFZ4cK17OA1zIN8de7U+A/nlVhrFZrQlY8zOcqknKXIVis1jw9etSUOIXM1ub2+nRzw3l5cywhxgkNIzgADrg5rUSDnjbpitdRmgttT1C0Fuf7Nd3MKfaDACSMgxlSauvZns1omp6dFfXkc7yPNOvAJ5Ei4UbA2jwfrWKVGpJ3PVw6lpqUErt/oU8T26pcBl+1aMLb8RPCrmRCWKjc7cQA8T5V1bsxHeRaJpyXausvDIypLnvEhaRmjVs75Ax/IpzZ6Po1hj2OwtoWH30jUyH1dst9akKdSpuGWzka7XR1PlhGy+YUUUU85YUUUUAFFFFABisYrNFAEfqmjaTrMPcahbLKq7xvkpLGfGORCGHnvVLvf6M4A4m0jVrm1kXJRbqNZ1BPQOhR8eua6JRQSnbKOWS9jO0sSN31vYXRUE95YSuhbHjDMqkH0Y+gquy2AicrKk0TDmkqlWHlhxn6V3SkLizsbteC6toJl6CaNXx6cQpMqKeUdSh1OrTxLKOLxCOLZHmXb/EcfQHFLmWQjeRyPNmP6mumSdkuyshz/VyIc5PcyTR5/2tQnZPsrHy0uBv81ppf/kc1HhP1NT6nSeXF/scuaVSwRTxSE4VEy7sf2VXLfSpnTuy+vamymSF7G2245rtGEhHhFCcMT64FdLttP02zGLSztbf/IhjjJ9SozTnarKn6szVepSkrU1YjNJ0PStGj4LSH7VwBPcS4aebH4n8PIYHlUpRRTeDlyk5O8nkKKKKCoUUUUAUu9/o80a8vbi+bUNUSW4nluJgGtWUvIxYheKHIHhVm0vTLXSLOKytmmaJGd+Kdw8hZzkkkAD6U+ooAKKKKAM0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAViiigDNFFFABRRRQAUUUUAFFFFABRRRQAViiigD//2Q==" },
      { name: "Foam-Based Fire Fighting Systems", description: "Best for fuel storage & chemical plants", image: "https://www.global-aero.com/wp-content/uploads/2019/07/section-image-hangar-foam.jpg" },
      { name: "Fireproof Blankets & Heat Shields", description: "Protects against high temperatures up to 1200°C", image: "https://th.bing.com/th/id/OIP.nJ0xKSZdUMf8kSDx6CmqowHaHa?pid=ImgDet&w=191&h=191&c=7" },
    ].map((item, index) => (
      <div key={index} className="bg-white hover:scale-105 shadow-md rounded-lg p-4 flex flex-col items-center text-center hover:shadow-lg   transition-shadow duration-300">
        <img src={item.image} alt={item.name} className="w-32 h-32 object-contain mb-4" />
        <h3 className="text-xl font-sans">{item.name}</h3>
        <p className="text-gray-600 mt-2 font-serif">{item.description}</p>
      </div>
    ))}
  </div>
</div>


        
        {/* <p className="text-xl font-light mt-4 place-content-center">
          Designed for factories, warehouses, and large-scale operations.<br />
          ✔<b>Fire Hydrants & Hose Reels</b>  – Critical for large-scale fire emergencies<br />
          ✔ <b>Foam-Based Fire Fighting Systems</b> – Best for fuel storage & chemical plants<br />
          ✔ <b>Fireproof Blankets & Heat Shields</b> – Protects against high temperatures up to 1200°C<br />
        </p> */}
      </div>
    </div>
  )
}

export default Products
