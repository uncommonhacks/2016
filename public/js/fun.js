		//make skeltal appear
	//list channels put caution in for 
	var channels = [
		'http://i.giphy.com/3oEduMLGc5PoJ7gcNy.gif', //
		'http://i.giphy.com/7Q5D6jwu58Ezm.gif', //headphone pop
		'http://i.giphy.com/13AN8X7jBIm15m.gif', //hacker overload
		'http://i.giphy.com/Oy4nobvUxIonu.gif', //vhs vaporwave
		'http://45.media.tumblr.com/39c9bfa3494694f3a1643220e5a1393a/tumblr_mqq02ouDy41qko0mwo1_250.gif', //very flexible
		'http://45.media.tumblr.com/7608dca172c85a3121cde61455ad0e06/tumblr_ncbtd8cCYI1tc08xbo1_500.gif', //moving mountain face - usheresque
		'http://49.media.tumblr.com/3ea7d291d2418efd5f3161c0077fbab5/tumblr_na9e4axOw91txar8to1_500.gif', //wifeee?
		'http://i.giphy.com/RrcxqNJMT6Wti.gif', //hackers?!?!?
		'http://i.giphy.com/jsp6TYPKpfXwY.gif', //oh sweet mr. skeltal
		'http://i.giphy.com/MGiARNEh9BuYU.gif', //bad technology
		'http://i.giphy.com/oBs8XXMyDBjSo.gif', //no wifi?????
		'http://i.giphy.com/seVKc7SpJEoKc.gif', //internet explorer glitch
		'http://i.giphy.com/iGSEDmbqxxlle.gif', //dont lie
		'http://i.giphy.com/5pTRy8Q67nOOA.gif', //dont lie
		'http://i.giphy.com/iGSEDmbqxxlle.gif', //dont lie
		'http://i.giphy.com/5pTRy8Q67nOOA.gif', //dont lie
		//john cena
		'http://i.giphy.com/12XNRtl6kZxQVq.gif', //shrink face
		'http://i.giphy.com/xTiTnoHt2NwerFMsCI.gif', //dragon ball c-ena
		
		//drake
		'http://i.giphy.com/ZnJ6KlfxOx4fm.gif', //skee ball
		'http://i.giphy.com/Rspfpv1Rop50k.gif', //fruit ninja
		'http://i.giphy.com/3oEduFNHfDMjyIpgCk.gif', //star wars drake
		'http://i.giphy.com/3o85xpldrSD5zkpgZy.gif', //swimming drake
		'http://i.giphy.com/FUgmWRgVOLDdS.gif', //crying drake
		'http://i.giphy.com/FUgmWRgVOLDdS.gif', //crying drake

		//doge and animals
		'http://i.giphy.com/glBmZAUttPmta.gif', // nigel + doge
		'http://i.giphy.com/ZO8upuwNKfpm0.gif', //dogeception
		'http://i.giphy.com/6gotdMeHVhneo.gif', //doge drums
		'http://i.giphy.com/UX1fquhNEQsLK.gif', //gandalf doge
		'http://i.giphy.com/Wiepe7LEg3MWc.gif', //doge enhance
		'http://i.giphy.com/oqbkWDL2MvRcY.gif', //doge dance
		'http://i.giphy.com/bLS5x5onbFPOg.gif', //parrotception
		
		//dj khaled
		'http://i.giphy.com/99WhvcE6E3gNW.gif', //star wars summary
		'http://i.giphy.com/cdQwh3clLoF9u.gif', //hammock talk
		'http://i.giphy.com/rVzJysxKbQYes.gif', //snapchatting talk massage
		'http://i.giphy.com/cpdgCLiAv6Y3m.gif', //srsly dove soap
		'http://i.giphy.com/6ppocAyaEaq0E.gif', //ride up
		'http://i.giphy.com/zNXvBiNNcrjDW.gif', //congrats u played yourself
		'http://i.giphy.com/zNXvBiNNcrjDW.gif', //congrats u played yourself
		'http://i.giphy.com/4iD503cQXNSsU.gif', //animated khaled
		//never gonna give you up
		'http://i.giphy.com/xJdzgDYjNeiVG.gif'
	];
	//change the channel
	var accepted = false;
	var warning = function(){
		mixpanel.track("Modal warning");
		swal({   title: "Bright lights ahead?",   text: "Immediately stop viewing if you experience lightheadedness, twitching, jerking etc. A small percentage of people may experience seizures when exposed to certain images, including flashing lights or patterns. Also, make sure to thank mr. skeltal. Thanks.",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Yes, I know. I won't sue you.",   closeOnConfirm: false },
				function(){   accepted = true;
							  swal("You may watch TV", "Make sure to thank mr. skeltal #uncommonsneezes", "success");
							  changeChannel();
				});	
	};
	var changeChannel = function(){
			if (accepted){
				var channel = channels[Math.floor(Math.random() * channels.length)]; //wow insane algorithm quick sort?!
				$("#tv").css('backgroundImage','url('.concat(channel, ')') );
			} else {
				warning();
			}

	}

	$("#remote").click(function(){
		mixpanel.track("Changed Channel");
		changeChannel();
	});
		
	//DISCLAIMER HERE:
/*
   A very small percentage of people may experience a seizure when exposed to certain visual images, including flashing lights or patterns that may appear in video games. Even people who have no history of seizures or epilepsy may have an undiagnosed condition that can cause these “photosensitive epileptic seizures” while watching video games.

These seizures may have a variety of symptoms, including lightheadedness, altered vision, eye or face twitching, jerking or shaking of arms or legs, disorientation, confusion, or momentary loss of awareness. Seizures may also cause loss of consciousness or convulsions that can lead to injury from falling down or striking nearby objects.

Immediately stop playing and consult a doctor if you experience any of these symptoms. Parents should watch for or ask their children about the above symptoms. Children and teenagers are more likely than adults to experience these seizures.

The risk of photosensitive epileptic seizures may be reduced by taking the following precautions:

Play in a well-lit room
Do not play if you are drowsy or fatigued
If you or any of your relatives have a history of seizures or epilepsy, consult a doctor before playing.
*/
		
