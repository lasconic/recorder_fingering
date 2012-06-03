//=============================================================================
//
//  Recorder fingering plugin
//  http://musescore.org/en/project/recorderfingering
//
//  Copyright (C)2010 Nicolas Froment (lasconic)
//
//  This program is free software; you can redistribute it and/or modify
//  it under the terms of the GNU General Public License version 2.
//
//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU General Public License for more details.
//
//  You should have received a copy of the GNU General Public License
//  along with this program; if not, write to the Free Software
//  Foundation, Inc., 675 Mass Ave, Cambridge, MA 02139, USA.
//=============================================================================

//
// This is ECMAScript code (ECMA-262 aka "Java Script")
//

var fingerings = [ "z", "Z", "x", "X", "c", "v", "V", "b", "B", "n", "N", "m", 
"a", "A", "s", "S", "d", "f", "F", "g", "G", "h", "H", "j",
 "q", "Q", "w"] 

//---------------------------------------------------------
//    init
//---------------------------------------------------------

function init()
      {
      
      }

//-------------------------------------------------------------------
//    run
//-------------------------------------------------------------------

function run()
      {
      // no score open (MuseScore 2.0+, can't happen earlier)
      if (typeof curScore === 'undefined')
          return;
      
      var cursor   = new Cursor(curScore);
      cursor.staff = 0;
      cursor.voice = 0;
      cursor.rewind();  // set cursor to first chord/rest
      var font = new QFont("recorder", 15);
      while (!cursor.eos()) {
            if (cursor.isChord()) {
                  
                  var pitch = cursor.chord().topNote().pitch;
                  var index = pitch - 65;
                  if(index >= 0 && index < fingerings.length){ 
                      var text  = new Text(curScore);
                      text.text = fingerings[index];
                      text.defaultFont = font;
                      text.yOffset = 6;
                      cursor.putStaffText(text);
                      }
                  }
            cursor.next();
            }
      }

var mscorePlugin = {
      menu: 'Plugins.Recorder Sopranino Alto',
      init: init,
      run:  run
      };

mscorePlugin;

