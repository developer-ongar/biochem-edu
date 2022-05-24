const WebIconContent = /* html */ `
  <style>
    svg {
      transition: transform 0.2s;
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
    .path {
      fill: var(--primarydark);
    }
    svg:hover .path{
      fill: var(--secondary);
    }

    @media (max-width: 440px) {
      svg {
        width: 18px;
        height: 18px;
      }
    }
    @media screen and (max-height: 450px) and (orientation: landscape) {
      svg {
        width: 18px;
        height: 19px;
      }
    }
  </style>
  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 477.73 477.73" style="enable-background:new 0 0 477.73 477.73;" xml:space="preserve">
	<g>
		<path class="path" d="M433.562,100.983c-0.008-0.154-0.025-0.308-0.051-0.461c-0.597-0.853-1.331-1.587-1.946-2.423
			c-4.46-6.076-9.182-11.924-14.165-17.545c-1.365-1.536-2.731-3.055-4.13-4.557c-5.131-5.495-10.513-10.735-16.145-15.718
			c-1.041-0.922-2.014-1.877-3.055-2.782c-13.88-11.891-29.078-22.153-45.295-30.583c-0.649-0.341-1.331-0.631-1.997-0.973
			c-7.222-3.67-14.627-6.969-22.187-9.882c-1.707-0.614-3.26-1.195-4.881-1.707c-6.724-2.423-13.551-4.545-20.48-6.366
			c-2.048-0.546-4.096-1.109-6.178-1.587c-6.827-1.587-13.653-2.799-20.634-3.789c-2.116-0.307-4.198-0.717-6.332-0.973
			c-17.979-2.185-36.156-2.185-54.136,0c-2.133,0.256-4.215,0.666-6.332,0.973c-6.98,0.99-13.875,2.202-20.634,3.789
			c-2.082,0.478-4.13,1.041-6.178,1.587c-6.975,1.82-13.801,3.942-20.48,6.366c-1.707,0.58-3.26,1.161-4.881,1.707
			c-7.559,2.913-14.965,6.211-22.187,9.882c-0.666,0.341-1.348,0.631-1.997,0.973c-16.271,8.421-31.52,18.682-45.449,30.583
			c-1.041,0.904-2.014,1.86-3.055,2.782c-5.689,5.006-11.071,10.246-16.145,15.718c-1.399,1.502-2.765,3.021-4.13,4.557
			c-4.995,5.609-9.717,11.457-14.165,17.544c-0.614,0.836-1.348,1.57-1.946,2.423c-0.078,0.149-0.147,0.303-0.205,0.461
			c-58.866,82.497-58.866,193.267,0,275.763c0.058,0.158,0.126,0.312,0.205,0.461c0.597,0.853,1.331,1.587,1.946,2.423
			c4.449,6.076,9.17,11.924,14.165,17.545c1.365,1.536,2.731,3.055,4.13,4.557c5.143,5.495,10.524,10.735,16.145,15.718
			c1.041,0.922,2.014,1.877,3.055,2.782c13.88,11.891,29.078,22.153,45.295,30.583c0.649,0.341,1.331,0.631,1.997,0.973
			c7.222,3.67,14.627,6.969,22.187,9.882c1.707,0.614,3.26,1.195,4.881,1.707c6.724,2.423,13.551,4.545,20.48,6.366
			c2.048,0.546,4.096,1.109,6.178,1.587c6.827,1.587,13.653,2.799,20.634,3.789c2.116,0.307,4.198,0.717,6.332,0.973
			c17.979,2.185,36.156,2.185,54.136,0c2.133-0.256,4.215-0.666,6.332-0.973c6.98-0.99,13.875-2.202,20.634-3.789
			c2.082-0.478,4.13-1.041,6.178-1.587c6.986-1.82,13.813-3.942,20.48-6.366c1.707-0.58,3.26-1.161,4.881-1.707
			c7.559-2.913,14.965-6.211,22.187-9.882c0.666-0.341,1.348-0.631,1.997-0.973c16.217-8.431,31.415-18.692,45.295-30.583
			c1.041-0.905,2.014-1.86,3.055-2.782c5.689-4.995,11.071-10.234,16.145-15.718c1.399-1.502,2.765-3.021,4.13-4.557
			c4.995-5.621,9.717-11.469,14.165-17.545c0.614-0.836,1.348-1.57,1.946-2.423c0.078-0.149,0.147-0.303,0.205-0.461
			C492.428,294.25,492.428,183.48,433.562,100.983z M414.089,133.274c16.322,26.881,26.178,57.185,28.791,88.525H340.651
			c-1.252-20.336-4.452-40.504-9.557-60.228C359.971,156.163,387.922,146.633,414.089,133.274z M282.368,38.775
			c0.956,0.222,1.877,0.529,2.833,0.751c6.11,1.434,12.169,3.072,18.091,5.12c0.905,0.307,1.792,0.666,2.68,0.99
			c5.871,2.048,11.656,4.318,17.323,6.827c0.99,0.461,1.963,0.973,2.953,1.434c5.427,2.583,10.729,5.376,15.906,8.38l3.413,2.065
			c4.915,3.004,9.694,6.218,14.336,9.643c1.195,0.87,2.389,1.707,3.567,2.662c4.551,3.413,8.909,7.071,13.073,10.974
			c1.092,0.99,2.219,1.963,3.294,2.987c4.369,4.147,8.533,8.533,12.561,13.073c0.512,0.597,1.058,1.143,1.57,1.707
			c-23.109,11.013-47.59,18.877-72.789,23.381c-11.674-32.092-27.095-62.694-45.943-91.17
			C277.606,38.025,280.03,38.264,282.368,38.775z M171.298,221.798c1.346-18.466,4.49-36.757,9.387-54.613
			c19.337,2.297,38.793,3.436,58.266,3.413c19.491-0.006,38.965-1.174,58.317-3.499c4.888,17.885,8.015,36.205,9.335,54.699H171.298
			z M306.603,255.932c-1.346,18.466-4.49,36.757-9.387,54.613c-19.337-2.297-38.793-3.436-58.266-3.413
			c-19.49-0.022-38.963,1.117-58.317,3.413c-4.883-17.857-8.009-36.148-9.336-54.613H306.603z M238.95,45.193
			c19.422,27.527,35.396,57.332,47.565,88.747c-15.799,1.678-31.676,2.521-47.565,2.526c-15.871-0.019-31.731-0.867-47.514-2.543
			C203.62,102.529,219.575,72.734,238.95,45.193z M85.521,103.663c4.011-4.54,8.192-8.926,12.561-13.073
			c1.075-1.024,2.202-1.997,3.294-2.987c4.21-3.834,8.568-7.492,13.073-10.974c1.178-0.905,2.372-1.707,3.567-2.662
			c4.642-3.413,9.421-6.628,14.336-9.643l3.413-2.065c5.177-3.026,10.479-5.82,15.906-8.38c0.99-0.461,1.963-0.973,2.953-1.434
			c5.666-2.56,11.452-4.83,17.323-6.827c0.887-0.324,1.707-0.683,2.679-0.99c5.922-1.98,11.947-3.618,18.091-5.12
			c0.956-0.222,1.877-0.529,2.85-0.734c2.338-0.512,4.762-0.751,7.134-1.178c-18.856,28.481-34.282,59.089-45.961,91.187
			c-25.199-4.504-49.681-12.368-72.789-23.381C84.463,104.806,85.009,104.26,85.521,103.663z M63.812,133.274
			c26.161,13.358,54.106,22.888,82.978,28.297c-5.099,19.725-8.294,39.893-9.54,60.228H35.021
			C37.635,190.459,47.491,160.155,63.812,133.274z M63.812,344.457c-16.322-26.881-26.178-57.185-28.791-88.525H137.25
			c1.252,20.336,4.452,40.504,9.557,60.228C117.93,321.567,89.979,331.097,63.812,344.457z M195.533,438.955
			c-0.956-0.222-1.877-0.529-2.833-0.751c-6.11-1.434-12.169-3.072-18.091-5.12c-0.905-0.307-1.792-0.666-2.68-0.99
			c-5.871-2.048-11.656-4.318-17.323-6.827c-0.99-0.461-1.963-0.973-2.953-1.434c-5.427-2.583-10.729-5.376-15.906-8.38
			l-3.413-2.065c-4.915-3.004-9.694-6.218-14.336-9.643c-1.195-0.87-2.389-1.707-3.567-2.662
			c-4.551-3.413-8.909-7.071-13.073-10.974c-1.092-0.99-2.219-1.963-3.294-2.987c-4.369-4.147-8.533-8.533-12.561-13.073
			c-0.512-0.597-1.058-1.143-1.57-1.707c23.109-11.013,47.59-18.877,72.789-23.381c11.674,32.092,27.095,62.694,45.943,91.17
			C200.294,439.706,197.871,439.467,195.533,438.955z M238.95,432.538c-19.422-27.527-35.396-57.332-47.565-88.747
			c31.607-3.402,63.488-3.402,95.095,0l-0.017,0.017C274.281,375.201,258.326,404.996,238.95,432.538z M392.38,374.067
			c-4.011,4.54-8.192,8.926-12.561,13.073c-1.075,1.024-2.202,1.997-3.294,2.987c-4.21,3.846-8.568,7.504-13.073,10.974
			c-1.178,0.904-2.372,1.792-3.567,2.662c-4.642,3.413-9.421,6.628-14.336,9.643l-3.413,2.065
			c-5.166,3.015-10.468,5.808-15.906,8.38c-0.99,0.461-1.963,0.973-2.953,1.434c-5.666,2.56-11.452,4.83-17.323,6.827
			c-0.887,0.324-1.707,0.683-2.679,0.99c-5.922,1.98-11.947,3.618-18.091,5.12c-0.956,0.222-1.877,0.529-2.85,0.734
			c-2.338,0.512-4.762,0.751-7.134,1.178c18.848-28.476,34.27-59.078,45.943-91.17c25.199,4.504,49.681,12.368,72.789,23.381
			C393.438,372.924,392.892,373.47,392.38,374.067z M414.089,344.457c-26.161-13.358-54.106-22.888-82.978-28.297
			c5.099-19.725,8.294-39.893,9.54-60.228H442.88C440.266,287.271,430.41,317.575,414.089,344.457z"/>
	</g>
</svg>
`;

class WebIcon extends HTMLElement {

  constructor() {
    super();

    let shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = WebIconContent;

  }


}

customElements.define("web-icon", WebIcon);
