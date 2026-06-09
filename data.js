const revisionData = {
  topics: [
    {
      id: 'rates',
      title: 'Rates of Reaction',
      icon: '⚗️',
      sections: [
        {
          id: 'rates-basics',
          title: 'Rate of Reaction — Basics',
          content: [
            { type: 'key-term', term: 'Rate of Reaction', definition: 'The speed of a reaction — how fast reactants are used up or products are made, typically measured in g/s or cm³/s.' },
            { type: 'equation', text: 'Rate = amount of reactant used up ÷ time taken' },
            { type: 'equation', text: 'Rate = amount of product made ÷ time taken' },
            { type: 'diagram', title: 'Rate of Reaction Graph', image: 'images/rate-graph.png', description: 'A graph showing volume of gas produced over time. Fast reactions produce a steep curve that levels off quickly. Slow reactions produce a shallow curve that takes longer to level off.' },
            { type: 'qa', question: 'What does a steep gradient on a rate of reaction graph represent?', answer: ['A fast (high) rate of reaction — a large amount of product is being made in a short time.', 'The steeper the line, the faster the rate of reaction.'] },
            { type: 'qa', question: 'What does a horizontal line (graph levelling off) represent?', answer: ['The reaction has stopped. No more product is being made because one of the reactants has run out (the limiting reactant is completely consumed).'] },
            { type: 'worked-example', title: 'Calculating Rate of Reaction', steps: ['A reaction produces 24 cm³ of gas in 6 seconds. Calculate the rate of reaction.', 'Rate = amount of product ÷ time taken', 'Rate = 24 cm³ ÷ 6 s = 4 cm³/s'], answer: 'The rate of reaction is 4 cm³/s' }
          ]
        },
        {
          id: 'rates-collision',
          title: 'Collision Theory',
          content: [
            { type: 'key-term', term: 'Collision Theory', definition: 'Chemical reactions occur only when reactant particles collide with sufficient energy to react. Not all collisions result in a reaction.' },
            { type: 'key-term', term: 'Activation Energy (Ea)', definition: 'The minimum energy that particles must have in order to react when they collide. Particles with energy below this threshold will not react even if they collide.' },
            { type: 'diagram', title: 'Activation Energy Diagram', image: 'images/activation-energy.png', description: 'Energy diagram showing reactants, products, and the activation energy barrier. Particles must have enough energy to overcome this barrier for a reaction to occur.' },
            { type: 'exam-tip', text: 'Remember: not every collision leads to a reaction — only those with energy ≥ the activation energy. This is why reactions don\'t happen instantly even when reactants are mixed.' },
            { type: 'list', items: ['Successful collision = particles collide with energy ≥ Ea', 'Unsuccessful collision = particles collide with energy < Ea (they just bounce apart)', 'Increasing temperature increases the proportion of particles with energy ≥ Ea'] }
          ]
        },
        {
          id: 'rates-factors',
          title: 'Factors Affecting Rate',
          content: [
            { type: 'paragraph', text: 'Four main factors affect the rate of a chemical reaction: Temperature, Concentration (or pressure for gases), Surface Area, and Catalysts. Understanding how each factor works is essential for Paper 2.' },
            { type: 'table', headers: ['Factor', 'Effect on Rate', 'Why?'], rows: [['Temperature ↑', 'Rate increases', 'Particles move faster → more frequent collisions + more energy ≥ Ea'], ['Concentration ↑', 'Rate increases', 'More particles in same volume → closer together → more frequent collisions'], ['Surface Area ↑', 'Rate increases', 'More particles exposed → more collisions possible'], ['Catalyst added', 'Rate increases', 'Lowers activation energy → more particles have energy ≥ Ea']] },
            { type: 'qa', question: 'Why does increasing temperature increase the rate of reaction?', answer: ['Particles move faster at higher temperatures, so they collide more frequently.', 'Particles have more kinetic energy, so more collisions exceed the activation energy (more successful collisions).', 'Both effects combine to significantly increase the reaction rate.'] },
            { type: 'qa', question: 'Why does increasing concentration (or pressure) increase the rate?', answer: ['More reacting particles in the same volume → particles are closer together → collide more frequently.', 'The number of successful collisions per unit time increases.'] },
            { type: 'qa', question: 'Why does increasing surface area increase the rate?', answer: ['More reacting particles are exposed and available for reaction (e.g., powder vs lump of solid).', 'More frequent collisions occur between reactant particles.'] },
            { type: 'key-term', term: 'Catalyst', definition: 'A substance that speeds up a reaction by lowering the activation energy. It is not used up in the reaction and can be used repeatedly.' },
            { type: 'diagram', title: 'Collision Theory', image: 'images/collision-theory.jpg', description: 'Diagram showing successful and unsuccessful collisions. Only collisions with energy ≥ activation energy result in a reaction.' },
            { type: 'list', items: ['Catalysts allow reactions to occur at lower temperatures → saves energy in industry', 'Catalysts are often transition metals (e.g. nickel for hydrogenation of plant oils, iron in Haber process)', 'Each reaction has its own specific catalyst — a catalyst for one reaction may not work for another', 'Enzymes are biological catalysts — they work at body temperature'] }
          ]
        },
        {
          id: 'rates-practicals',
          title: 'Required Practicals',
          content: [
            { type: 'qa', question: 'Required Practical: Measuring rate by changing concentration (gas produced)', answer: ['Measure 25 cm³ of 0.2 M hydrochloric acid using a measuring cylinder; add to a 250 cm³ conical flask.', 'Weigh 1 g of calcium carbonate (marble chips) and add to the flask.', 'Attach a gas syringe and start the stopwatch immediately.', 'Record the volume of gas produced every 30 seconds until no more gas is produced.', 'Repeat three times and calculate a mean volume for each time interval.', 'Repeat the entire experiment with 0.4, 0.6, 0.8 and 1.0 M concentrations of acid.', 'Plot a graph of volume vs time for each concentration — steeper curves show faster rates.'] },
            { type: 'qa', question: 'Required Practical: Measuring rate by changing temperature (solid produced — disappearing cross)', answer: ['Measure 10 cm³ of sodium thiosulfate solution into a conical flask placed on paper with a cross drawn on it.', 'Measure 5 cm³ of hydrochloric acid at room temperature in a measuring cylinder.', 'Add the acid to the flask and start the stopwatch immediately.', 'Record the time taken for the cross to disappear (when the yellow precipitate formed obscures the cross).', 'Repeat three more times at room temperature to get a mean time.', 'Repeat the entire experiment using acid at different temperatures: ice bath (~5 °C), 30 °C, 40 °C, 50 °C using water baths.', 'Plot a graph of 1/time vs temperature — steeper gradient shows temperature has a strong effect on rate.'] },
            { type: 'exam-tip', text: 'In the disappearing cross practical, the time taken is inversely proportional to the rate — shorter time = faster rate. Always use a thermometer to record the exact temperature of the acid.' }
          ]
        }
      ]
    },
    {
      id: 'equilibrium',
      title: 'Equilibrium & Chemical Analysis',
      icon: '⚖️',
      sections: [
        {
          id: 'equilibrium-basics',
          title: 'Reversible Reactions & Equilibrium',
          content: [
            { type: 'key-term', term: 'Reversible Reaction', definition: 'A reaction where the products can react to reform the original reactants. Shown using the symbol ⇌ (double arrow).' },
            { type: 'equation', text: 'Reactants ⇌ Products' },
            { type: 'paragraph', text: 'If the forward reaction is exothermic (releases heat), the backward reaction is endothermic (absorbs heat), and vice versa. Example: thermal decomposition of hydrated copper sulfate — heating drives the forward reaction, cooling drives the backward reaction.' },
            { type: 'key-term', term: 'Closed System', definition: 'A system where no product or reactant can escape or enter. Equilibrium can only be reached in a closed system.' },
            { type: 'key-term', term: 'Dynamic Equilibrium', definition: 'When the forward and backward reactions occur at exactly the same rate — both reactions are still happening, but there is no overall change in concentration of reactants or products.' },
            { type: 'diagram', title: 'Le Chatelier\'s Principle', image: 'images/le-chatelier.png', description: 'Diagram showing how equilibrium shifts in response to changes in reactants, pressure, and temperature. The system always responds to counteract the imposed change.' }
          ]
        },
        {
          id: 'le-chatelier',
          title: 'Le Chatelier\'s Principle',
          content: [
            { type: 'key-term', term: 'Le Chatelier\'s Principle', definition: 'If the conditions of a system at equilibrium are changed, the system will respond to counteract that change and re-establish equilibrium.' },
            { type: 'paragraph', text: 'This principle helps predict how equilibrium shifts when temperature, pressure, or concentration changes. The system always tries to undo the change that was imposed on it.' },
            { type: 'table', headers: ['Change', 'Effect on Equilibrium', 'Why?'], rows: [['Increase reactant concentration', 'Equilibrium shifts right → more product formed', 'System tries to use up the extra reactant'], ['Decrease product concentration', 'Equilibrium shifts right → more product formed', 'System tries to replace the removed product'], ['Increase temperature (endothermic forward)', 'Equilibrium shifts right → more product', 'System absorbs the added heat by favouring the endothermic forward reaction'], ['Increase temperature (exothermic forward)', 'Equilibrium shifts left → less product', 'System releases the added heat by favouring the endothermic backward reaction'], ['Decrease temperature (exothermic forward)', 'Equilibrium shifts right → more product', 'System releases heat by favouring the exothermic forward reaction'], ['Increase pressure (gases only)', 'Equilibrium shifts towards fewer gas molecules', 'System reduces pressure by favouring the side with fewer moles of gas'], ['Decrease pressure (gases only)', 'Equilibrium shifts towards more gas molecules', 'System increases pressure by favouring the side with more moles of gas']] },
            { type: 'worked-example', title: 'Applying Le Chatelier\'s Principle', steps: ['Consider: N₂ + 3H₂ ⇌ 2NH₃ (exothermic forward reaction)', 'If temperature is increased, which way does equilibrium shift?', 'The forward reaction is exothermic (releases heat).', 'Increasing temperature adds heat to the system.', 'The system responds by favouring the endothermic backward reaction to absorb the heat.', 'Equilibrium shifts LEFT, producing less ammonia.'], answer: 'Equilibrium shifts left. Less ammonia is produced at higher temperatures, even though the reaction is faster.' },
            { type: 'exam-tip', text: 'Pressure changes only apply to reactions involving GASES. Always count the number of gas molecules on each side of the equation to predict the effect of pressure changes.' }
          ]
        },
        {
          id: 'chemical-analysis',
          title: 'Chemical Analysis',
          content: [
            { type: 'key-term', term: 'Pure Substance (chemistry)', definition: 'Made from only one element or compound — has a sharp, precise melting point and boiling point that match known literature values.' },
            { type: 'key-term', term: 'Impure Substance', definition: 'A mixture of two or more substances — has a range of melting/boiling points rather than a sharp point.' },
            { type: 'key-term', term: 'Formulation', definition: 'A mixture designed as a useful product by mixing components in carefully measured quantities (e.g. fuels, medicines, fertilisers, foods, alloys).' },
            { type: 'qa', question: 'How can you test if a substance is pure?', answer: ['Measure its melting point or boiling point.', 'A pure substance has a sharp, precise melting/boiling point matching the known value.', 'An impure substance has a range of melting/boiling points (lower melting point, higher boiling point).'] }
          ]
        },
        {
          id: 'chromatography',
          title: 'Paper Chromatography',
          content: [
            { type: 'paragraph', text: 'Paper chromatography is used to identify artificial colours in food, separate mixtures of inks/dyes, and determine the purity of a substance. It works because different substances dissolve to different extents in the solvent.' },
            { type: 'list', items: ['A spot of colour is placed on chromatography paper above the solvent line (using a pencil baseline, never pen).', 'The paper is placed in a solvent (usually water or ethanol) — the solvent soaks up and carries the colours.', 'A pure colour leaves one dot; a mixture leaves multiple dots.', 'The more soluble the colour, the higher it travels (higher Rf value).', 'Colours at the same height on different chromatograms are the same substance.', 'The solvent front must not go above the top of the paper or results are invalid.'] },
            { type: 'equation', text: 'Rf = distance moved by spot ÷ distance moved by solvent' },
            { type: 'worked-example', title: 'Calculating Rf Values', steps: ['A dye spot moves 4 cm up the paper.', 'The solvent front moves 10 cm up the paper.', 'Rf = distance moved by spot ÷ distance moved by solvent', 'Rf = 4 cm ÷ 10 cm = 0.4'], answer: 'The Rf value is 0.4. This can be compared to known values to identify the dye.' },
            { type: 'exam-tip', text: 'Rf values are always between 0 and 1. Always use a pencil baseline (not pen) and ensure the baseline is above the solvent level when setting up chromatography.' }
          ]
        },
        {
          id: 'gas-tests',
          title: 'Gas Tests',
          content: [
            { type: 'table', headers: ['Gas', 'Test', 'Positive Result'], rows: [['Chlorine (Cl₂)', 'Hold damp litmus paper near the gas', 'Bleaches the litmus paper white (or turns red then white)'], ['Carbon dioxide (CO₂)', 'Bubble through limewater (calcium hydroxide solution)', 'Limewater turns cloudy (milky white precipitate of CaCO₃)'], ['Oxygen (O₂)', 'Hold a glowing splint near the gas', 'Glowing splint relights (or burns brightly)'], ['Hydrogen (H₂)', 'Hold a lit splint at the open end of a test tube', 'Squeaky pop sound (hydrogen burns in air)']] },
            { type: 'exam-tip', text: 'Remember the order: Chlorine bleaches, Carbon dioxide clouds limewater, Oxygen relights a splint, Hydrogen makes a pop. These are the four most common gas tests in GCSE Chemistry.' }
          ]
        }
      ]
    },
    {
      id: 'organic',
      title: 'Organic Chemistry',
      icon: '🛢️',
      sections: [
        {
          id: 'crude-oil',
          title: 'Crude Oil & Hydrocarbons',
          content: [
            { type: 'key-term', term: 'Crude Oil', definition: 'A fossil fuel made of a mixture of hydrocarbons. Formed from the remains of ancient organisms over millions of years.' },
            { type: 'key-term', term: 'Hydrocarbon', definition: 'A compound made from hydrogen and carbon atoms ONLY. No other elements present.' },
            { type: 'key-term', term: 'Alkane', definition: 'A saturated hydrocarbon — all atoms joined by single covalent bonds (C-C and C-H). General formula: CₙH₂ₙ₊₂.' },
            { type: 'equation', text: 'General formula of alkanes: CₙH₂ₙ₊₂' },
            { type: 'table', headers: ['Name', 'Molecular Formula', 'Structural Formula', 'Uses'], rows: [['Methane', 'CH₄', 'CH₄', 'Natural gas, fuel'], ['Ethane', 'C₂H₆', 'CH₃-CH₃', 'Fuel, chemical feedstock'], ['Propane', 'C₃H₈', 'CH₃-CH₂-CH₃', 'Cooking gas (bottled gas)'], ['Butane', 'C₄H₁₀', 'CH₃-CH₂-CH₂-CH₃', 'Lighter fuel, aerosol propellant']] },
            { type: 'qa', question: 'How is crude oil separated?', answer: ['By fractional distillation in a fractionating column.', 'Crude oil is heated to ~350 °C and pumped into the bottom of the column.', 'The column is hot at the bottom (~350 °C) and cool at the top (~40 °C).', 'Molecules evaporate, rise, cool, and condense at their boiling point — collected as fractions.', 'Smaller molecules (lower boiling points) collect at the top; larger molecules at the bottom.'] },
            { type: 'diagram', title: 'Fractional Distillation Column', image: 'images/fractional-distillation.jpg', description: 'Fractional distillation column showing temperature gradient and the fractions collected at different heights. Lighter molecules with lower boiling points collect at the top; heavier molecules at the bottom.' },
            { type: 'table', headers: ['Property', 'As molecule size increases…'], rows: [['Boiling point', 'Increases (more intermolecular forces)'], ['Volatility', 'Decreases (less volatile, less easily evaporated)'], ['Flammability', 'Decreases (less flammable, harder to ignite)'], ['Viscosity', 'Increases (thicker, stickier, flows slower)'], ['Colour', 'Darkens (from colourless to dark brown)']] }
          ]
        },
        {
          id: 'combustion',
          title: 'Combustion of Fuels',
          content: [
            { type: 'key-term', term: 'Complete Combustion', definition: 'Burning in plenty of oxygen → carbon fully oxidised to CO₂. Products: carbon dioxide + water only. Releases maximum energy.' },
            { type: 'equation', text: 'Hydrocarbon + oxygen → carbon dioxide + water (+ energy)' },
            { type: 'equation', text: 'CH₄ + 2O₂ → CO₂ + 2H₂O' },
            { type: 'key-term', term: 'Incomplete Combustion', definition: 'Burning in limited oxygen → carbon partially oxidised. Products: water + carbon monoxide and/or carbon particles (soot). Releases less energy than complete combustion.' },
            { type: 'equation', text: 'CH₄ + 1.5O₂ → CO + 2H₂O  (or CH₄ + O₂ → C + 2H₂O)' },
            { type: 'table', headers: ['Product', 'Environmental Problem', 'Health/Other Impact'], rows: [['Carbon dioxide (CO₂)', 'Greenhouse gas → global warming → climate change', 'Contributes to rising sea levels and extreme weather'], ['Carbon monoxide (CO)', 'Toxic gas — binds to haemoglobin in blood', 'Prevents oxygen transport → can cause poisoning, coma, death'], ['Carbon particles (soot)', 'Global dimming (reflects sunlight); air pollution', 'Respiratory problems; lung damage; asthma'], ['Sulfur dioxide (SO₂)', 'Acid rain; air pollution', 'Breathing problems; respiratory damage; damages buildings'], ['Oxides of nitrogen (NOₓ)', 'Acid rain; air pollution', 'Breathing problems; respiratory damage; contributes to ozone depletion']] },
            { type: 'exam-tip', text: 'Nitrogen oxides form in car engines because the very high temperature (~1000 °C) causes normally unreactive nitrogen (N₂) to react with oxygen (O₂). This is why catalytic converters are important — they reduce NOₓ emissions.' }
          ]
        },
        {
          id: 'cracking',
          title: 'Cracking',
          content: [
            { type: 'key-term', term: 'Cracking', definition: 'The splitting of long-chain hydrocarbons into shorter, more useful ones. It is a thermal decomposition reaction that breaks C-C bonds.' },
            { type: 'paragraph', text: 'Long-chain hydrocarbons are cracked because there is more supply than demand for them, and shorter molecules have more useful applications (e.g., petrol, alkenes for polymers).' },
            { type: 'table', headers: ['Method', 'Conditions', 'Products'], rows: [['Catalytic cracking', 'Vapours passed over hot powdered aluminium oxide (Al₂O₃) catalyst at ~500 °C', 'More branched alkanes (used in petrol) + alkenes'], ['Steam cracking', 'Vapours mixed with steam at very high temperature (~800 °C)', 'More alkenes (used for polymers and chemicals) + alkanes']] },
            { type: 'equation', text: 'Long-chain alkane → shorter alkane + alkene' },
            { type: 'equation', text: 'C₁₆H₃₄ → C₈H₁₈ + C₈H₁₆  (example of cracking)' },
            { type: 'exam-tip', text: 'Cracking always produces at least one alkene (containing a C=C double bond). You can test for alkenes using bromine water — it decolourises (turns from orange to colourless).' }
          ]
        },
        {
          id: 'alkenes-polymers',
          title: 'Alkenes & Polymerisation',
          content: [
            { type: 'key-term', term: 'Alkene', definition: 'An unsaturated hydrocarbon containing a carbon–carbon double bond (C=C). General formula: CₙH₂ₙ.' },
            { type: 'equation', text: 'General formula of alkenes: CₙH₂ₙ' },
            { type: 'table', headers: ['Name', 'Molecular Formula', 'Structural Formula'], rows: [['Ethene', 'C₂H₄', 'CH₂=CH₂'], ['Propene', 'C₃H₆', 'CH₂=CH-CH₃']] },
            { type: 'qa', question: 'Test for alkenes (unsaturation)?', answer: ['Add bromine water (orange solution) to the compound.', 'Alkene (unsaturated): bromine water is decolourised — turns colourless (orange → colourless).', 'Alkane (saturated): bromine water stays orange.', 'This is because the C=C double bond reacts with bromine, removing its colour.'] },
            { type: 'key-term', term: 'Polymerisation', definition: 'Joining many small monomer molecules together to form a long polymer chain. Monomers are unsaturated (contain C=C); polymers are saturated (all single bonds).' },
            { type: 'diagram', title: 'Addition Polymerisation', image: 'images/polymerisation.jpg', description: 'Diagram showing how ethene monomers undergo addition polymerisation to form poly(ethene). The C=C double bonds open up and link together to form a long polymer chain.' },
            { type: 'table', headers: ['Monomer', 'Polymer', 'Uses'], rows: [['Ethene', 'Poly(ethene)', 'Plastic bags, bottles, crates, film'], ['Propene', 'Poly(propene)', 'Ropes, garden furniture, car bumpers, containers'], ['Phenylethene', 'Poly(phenylethene)', 'Packaging, drinks cups, insulation'], ['Chloroethene', 'Poly(chloroethene) / PVC', 'Drain pipes, window frames, flooring']] },
            { type: 'exam-tip', text: 'Polymers are made from unsaturated monomers (alkenes). The polymer itself contains only single bonds. This is why polymers are stable and don\'t easily react — they have no C=C double bonds.' }
          ]
        }
      ]
    },
    {
      id: 'atmosphere',
      title: 'Chemistry of the Atmosphere',
      icon: '🌍',
      sections: [
        {
          id: 'atmosphere-composition',
          title: 'Atmosphere Composition & Evolution',
          content: [
            { type: 'table', headers: ['Gas', 'Approximate % Today', 'Notes'], rows: [['Nitrogen (N₂)', '~79%', 'Inert; essential for life'], ['Oxygen (O₂)', '~21%', 'Essential for respiration and combustion'], ['Argon (Ar)', '~1%', 'Inert; used in light bulbs'], ['Carbon dioxide (CO₂)', '~0.04%', 'Greenhouse gas; used in photosynthesis'], ['Other gases', 'trace amounts', 'Neon, helium, methane, etc.']] },
            { type: 'qa', question: 'What was the early atmosphere mainly composed of?', answer: ['Mainly carbon dioxide (CO₂), released by volcanic activity.', 'Also contained water vapour, ammonia (NH₃), and methane (CH₄).', 'Very little oxygen — the early atmosphere was reducing (not oxidising).', 'Water vapour condensed as the Earth cooled, forming the oceans.'] },
            { type: 'qa', question: 'How did CO₂ decrease over time?', answer: ['CO₂ dissolved in oceans, forming carbonates that precipitated as sedimentary rocks (limestone, chalk).', 'CO₂ became locked up in fossil fuels (coal, oil, natural gas) from dead organisms.', 'Plants evolved and absorbed CO₂ for photosynthesis, producing oxygen as a byproduct.', 'Oxygen accumulated in the atmosphere, allowing aerobic respiration to evolve.'] }
          ]
        },
        {
          id: 'greenhouse-effect',
          title: 'Greenhouse Effect & Global Warming',
          content: [
            { type: 'key-term', term: 'Greenhouse Gas', definition: 'A gas that absorbs long-wavelength infrared radiation emitted by the Earth (but not the Sun\'s shorter-wavelength radiation). Examples: methane (CH₄), carbon dioxide (CO₂), water vapour (H₂O), nitrous oxide (N₂O).' },
            { type: 'diagram', title: 'Greenhouse Effect', image: 'images/greenhouse-effect.png', description: 'Diagram showing how greenhouse gases trap heat in the atmosphere, preventing it from escaping to space. More greenhouse gases = more heat trapped = warmer Earth.' },
            { type: 'qa', question: 'How does human activity increase CO₂?', answer: ['Combustion of fossil fuels (coal, oil, natural gas) for energy, transport, and heating.', 'Deforestation — fewer trees to absorb CO₂ via photosynthesis.', 'Industrial processes (e.g., cement production releases CO₂).'] },
            { type: 'qa', question: 'How does human activity increase methane?', answer: ['Animal farming — methane produced during digestion (enteric fermentation) and decomposition of manure.', 'Decomposition of waste buried in landfill (anaerobic decomposition).', 'Leakage from oil and gas extraction.'] },
            { type: 'key-term', term: 'Global Warming', definition: 'An increase in the Earth\'s average surface temperature, caused by enhanced greenhouse effect from increased greenhouse gas concentrations.' },
            { type: 'key-term', term: 'Climate Change', definition: 'Long-term changes in global climate patterns (temperature, rainfall, wind patterns) resulting from global warming.' },
            { type: 'table', headers: ['Effect of Climate Change', 'Detail', 'Impact'], rows: [['Sea level rise', 'Ice caps and glaciers melt; thermal expansion of water', 'Flooding and coastal erosion; island nations at risk'], ['More severe storms', 'More frequent and intense weather events', 'Hurricanes, typhoons, floods cause damage and loss of life'], ['Changed rainfall patterns', 'Distribution and amount of rainfall changes', 'Droughts in some regions; flooding in others'], ['Drought / water shortage', 'Temperature increases → less fresh water available', 'Crop failure; water rationing; conflicts over water'], ['Wildlife disruption', 'Changes in behaviour and distribution; possible extinction', 'Ecosystems collapse; loss of biodiversity'], ['Food production affected', 'Impacts on crop and livestock growth', 'Food shortages; famine; economic disruption']] },
            { type: 'exam-tip', text: 'Evidence about climate change can be biased — industries using fossil fuels may present data downplaying climate change, while renewable energy companies may emphasise it. Always evaluate sources critically.' }
          ]
        },
        {
          id: 'carbon-footprint',
          title: 'Carbon Footprint',
          content: [
            { type: 'key-term', term: 'Carbon Footprint', definition: 'The total amount of CO₂ and other greenhouse gases emitted over the full life cycle of a product, service or event (from production to disposal or recycling).' },
            { type: 'paragraph', text: 'Reducing carbon footprint is essential for mitigating climate change. Strategies include using renewable energy, improving energy efficiency, reducing waste, and changing consumption patterns.' },
            { type: 'list', items: ['Increase use of alternative/renewable energy sources (solar, wind, hydroelectric)', 'Energy conservation (insulation, efficient appliances, LED lighting)', 'Carbon capture and storage (CCS) — capturing CO₂ from air or industry', 'Carbon offsetting — funding projects that reduce emissions elsewhere', 'Carbon taxes and licences — economic incentives to reduce emissions', 'Carbon-neutral fuels — biofuels that don\'t increase atmospheric CO₂', 'Circular economy — reduce, reuse, recycle to minimise waste'] },
            { type: 'qa', question: 'Why is it difficult to reduce the carbon footprint?', answer: ['Scientific disagreement — some dispute the extent of climate change', 'Economic considerations — renewable energy is more expensive upfront', 'Incomplete international co-operation — not all countries commit to reduction', 'Lack of public information and education about climate change', 'Lifestyle changes required — people reluctant to change consumption patterns', 'Dependence on fossil fuels — infrastructure built around oil, gas, coal'] }
          ]
        },
        {
          id: 'atmospheric-pollutants',
          title: 'Atmospheric Pollutants',
          content: [
            { type: 'table', headers: ['Pollutant', 'Source', 'Problem', 'Health Impact'], rows: [['Carbon monoxide (CO)', 'Incomplete combustion of fuels', 'Toxic gas; binds to haemoglobin', 'Reduces oxygen transport; poisoning; coma; death'], ['Particulates (soot)', 'Incomplete combustion; vehicle emissions', 'Lung damage; global dimming (reflects sunlight)', 'Respiratory problems; asthma; cardiovascular disease'], ['Sulfur dioxide (SO₂)', 'Combustion of sulfur-containing fossil fuels', 'Acid rain; air pollution', 'Breathing problems; respiratory damage'], ['Oxides of nitrogen (NOₓ)', 'High-temperature combustion (e.g. car engines)', 'Acid rain; air pollution; ozone depletion', 'Breathing problems; respiratory damage']] },
            { type: 'key-term', term: 'Acid Rain', definition: 'Rainwater with pH < 5.6 (acidic) caused by SO₂ and NOₓ dissolving in water to form sulfuric and nitric acids.' },
            { type: 'equation', text: 'SO₂ + H₂O → H₂SO₃ (sulfurous acid)' },
            { type: 'equation', text: '2NO₂ + H₂O → HNO₃ + HNO₂ (nitric and nitrous acids)' }
          ]
        }
      ]
    },
    {
      id: 'resources',
      title: 'Using Resources',
      icon: '♻️',
      sections: [
        {
          id: 'sustainable-development',
          title: 'Sustainable Development & Resources',
          content: [
            { type: 'key-term', term: 'Finite Resources', definition: 'Resources that cannot be replaced once used. Examples: coal, crude oil, natural gas, limestone, peat, metals.' },
            { type: 'key-term', term: 'Renewable Resources', definition: 'Resources that can be replaced when used. Examples: wood, cotton, bioethanol, wind, solar, hydroelectric power, geothermal energy.' },
            { type: 'key-term', term: 'Sustainable Development', definition: 'An approach to development that meets the needs of the present without compromising the ability of future generations to meet their own needs.' },
            { type: 'table', headers: ['Resource', 'Unsustainable Method', 'Sustainable Method'], rows: [['Metals', 'Mine, use once, dispose in landfill', 'Recycle — melt down and reuse'], ['Fuels', 'Use fossil fuels (finite)', 'Use biofuels or renewable energy'], ['Electricity', 'Burn fossil fuels (coal, gas)', 'Use renewable sources (wind, solar, hydro)'], ['Timber', 'Deforestation without replanting', 'Managed forests — replant after harvesting'], ['Water', 'Overuse; pollution', 'Conservation; treatment and reuse']] }
          ]
        },
        {
          id: 'recycling-lca',
          title: 'Recycling & Life Cycle Assessment',
          content: [
            { type: 'table', headers: ['Material', 'Recycling Process'], rows: [['Metals', 'Separate by type → melt → recast/remould into new products'], ['Glass', 'Separate → crush → melt → remould into new containers'], ['Plastics', 'Separate by type (1-7) → melt → remould into new products or fibres'], ['Paper', 'Collect → pulp → remove ink → form into new paper']] },
            { type: 'key-term', term: 'Life Cycle Assessment (LCA)', definition: 'An examination of the environmental impact at every stage of a product\'s life — from raw material extraction, through manufacturing and use, to disposal or recycling.' },
            { type: 'list', items: ['Extraction — mining or harvesting raw materials; energy use; habitat destruction', 'Manufacturing — processing; energy use; waste production; transport', 'Use — energy consumption; maintenance; potential for reuse', 'Disposal — landfill; incineration; recycling; environmental impact'] },
            { type: 'exam-tip', text: 'LCA cannot be purely objective — some impacts (e.g. amount of pollution, habitat loss) are difficult to quantify and require personal judgements. Different studies may reach different conclusions.' }
          ]
        },
        {
          id: 'water-treatment',
          title: 'Water Treatment',
          content: [
            { type: 'key-term', term: 'Potable Water', definition: 'Water that is safe to drink — contains no harmful bacteria, viruses, or chemicals at dangerous levels.' },
            { type: 'paragraph', text: 'In the UK, potable water comes from fresh water in lakes, rivers and reservoirs (collected from rainfall). It must be treated to remove impurities and kill microorganisms.' },
            { type: 'table', headers: ['Step', 'Purpose', 'Method'], rows: [['Filtration', 'Remove large solids (sand, gravel, leaves)', 'Pass through sand and gravel beds'], ['Sedimentation', 'Remove suspended particles', 'Allow to stand; heavier particles sink'], ['Sterilisation', 'Kill bacteria and viruses', 'Chlorination, UV light, or ozonation']] },
            { type: 'key-term', term: 'Desalination', definition: 'Removal of salt from sea water to produce fresh water. Two main methods: distillation and reverse osmosis.' },
            { type: 'qa', question: 'How does reverse osmosis work?', answer: ['High pressure forces sea water through a semi-permeable membrane.', 'Water molecules are small enough to pass through the membrane.', 'Dissolved salts and other ions are too large to pass through.', 'Pure water is collected on one side; concentrated brine on the other.', 'Advantages: energy-efficient compared to distillation; works at room temperature.', 'Disadvantages: membrane can clog; requires high pressure; produces brine waste.'] },
            { type: 'table', headers: ['Waste Water Treatment Step', 'Purpose'], rows: [['Screening', 'Remove large solids (rags, sticks, grit)'], ['Sedimentation', 'Heavier suspended substances sink and produce sludge; lighter material floats'], ['Anaerobic treatment of sludge', 'Bacteria break down sludge in absence of air, producing methane (biogas) as byproduct'], ['Aerobic treatment of effluent', 'Air passed through treated water; good bacteria kill harmful bacteria and break down organic matter']] }
          ]
        },
        {
          id: 'metal-extraction',
          title: 'Metal Extraction (Including Low-Grade Ores)',
          content: [
            { type: 'key-term', term: 'Low-Grade Ore', definition: 'An ore that contains only a small amount of metal (low percentage of metal compound). Traditional mining would be uneconomical.' },
            { type: 'key-term', term: 'Phytomining', definition: 'A method of extracting metals using plants that absorb metal compounds from the soil. The plants are harvested and burned; the metal is extracted from the ash.' },
            { type: 'list', items: ['Plants are grown on land contaminated with metal compounds.', 'Plants absorb metal ions through their roots and accumulate them in their tissues.', 'Plants are harvested and dried.', 'Plants are burned in a furnace, producing ash rich in metal compounds.', 'Metal is extracted from the ash by reduction or other methods.', 'Advantages: works on low-grade ores; cleans up contaminated land; sustainable.', 'Disadvantages: slow process; requires large areas of land; produces ash waste.'] },
            { type: 'key-term', term: 'Bioleaching', definition: 'A method of extracting metals using bacteria that produce soluble metal compounds from insoluble ones.' },
            { type: 'list', items: ['Bacteria (e.g. Thiobacillus) are added to crushed ore.', 'Bacteria oxidise metal sulfides to produce soluble metal compounds (leachate).', 'The leachate is collected and metal is extracted by displacement or electrolysis.', 'Advantages: works on low-grade ores; less energy than traditional smelting; sustainable.', 'Disadvantages: slow process; requires specific bacteria; produces acidic waste.'] },
            { type: 'key-term', term: 'Leaching', definition: 'The use of dilute acid to produce a soluble metal compound from insoluble metal compounds.' },
            { type: 'equation', text: 'Metal oxide + dilute acid → metal salt + water' },
            { type: 'equation', text: 'CuO + 2HCl → CuCl₂ + H₂O' }
          ]
        }
      ]
    }
  ]
};
