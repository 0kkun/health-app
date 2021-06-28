(()=>{"use strict";class e{constructor(){}static getInstance(){return e.instance||(e.instance=new e),e.instance}get totalScore(){return n.getInstance().activeElementsScore.reduce(((e,t)=>e+t),0)}render(){document.querySelector(".score__number").textContent=String(this.totalScore)}}class t{constructor(e){this.element=e,e.addEventListener("click",this.clickEventHandler.bind(this))}clickEventHandler(){this.element.classList.toggle("food--active"),e.getInstance().render()}}class n{constructor(){this.elements=document.querySelectorAll(".food"),this._activeElements=[],this._activeElementsScore=[],this.elements.forEach((e=>{new t(e)}))}static getInstance(){return n.instance||(n.instance=new n),n.instance}get activeElements(){return this._activeElements=[],this.elements.forEach((e=>{e.classList.contains("food--active")&&this._activeElements.push(e)})),this._activeElements}get activeElementsScore(){return this._activeElementsScore=[],this.activeElements.forEach((e=>{const t=e.querySelector(".food__score");t&&this._activeElementsScore.push(Number(t.textContent))})),this._activeElementsScore}}n.getInstance()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9odG1sL2pzL3RzL2Zvb2QtYXBwL3Njb3JlLnRzIiwid2VicGFjazovL2FwcC8uL2h0bWwvanMvdHMvZm9vZC1hcHAvZm9vZC50cyIsIndlYnBhY2s6Ly9hcHAvLi9odG1sL2pzL3RzL2Zvb2QtYXBwL2Zvb2RzLnRzIiwid2VicGFjazovL2FwcC8uL2h0bWwvanMvdHMvZm9vZC1hcHAvbWFpbi50cyJdLCJuYW1lcyI6WyJTY29yZSIsImluc3RhbmNlIiwiRm9vZHMiLCJnZXRJbnN0YW5jZSIsImFjdGl2ZUVsZW1lbnRzU2NvcmUiLCJyZWR1Y2UiLCJ0b3RhbCIsInNjb3JlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJTdHJpbmciLCJ0aGlzIiwidG90YWxTY29yZSIsIkZvb2QiLCJlbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsaWNrRXZlbnRIYW5kbGVyIiwiYmluZCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInJlbmRlciIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIl9hY3RpdmVFbGVtZW50cyIsIl9hY3RpdmVFbGVtZW50c1Njb3JlIiwiZm9yRWFjaCIsImNvbnRhaW5zIiwicHVzaCIsImFjdGl2ZUVsZW1lbnRzIiwiZm9vZFNjb3JlIiwiTnVtYmVyIl0sIm1hcHBpbmdzIjoibUJBTU8sTUFBTUEsRUFLVCxlQUtBLHFCQUtJLE9BSElBLEVBQU1DLFdBQ05ELEVBQU1DLFNBQVcsSUFBSUQsR0FFbEJBLEVBQU1DLFNBTWpCLGlCQUdJLE9BRmNDLEVBQU1DLGNBRVBDLG9CQUFvQkMsUUFBTyxDQUFDQyxFQUFPQyxJQUFVRCxFQUFRQyxHQUFPLEdBTTdFLFNBQ0lDLFNBQVNDLGNBQWMsa0JBQW1CQyxZQUFjQyxPQUFPQyxLQUFLQyxhQy9CckUsTUFBTUMsRUFDVCxZQUFtQkMsR0FBQSxLQUFBQSxVQUVmQSxFQUFRQyxpQkFBaUIsUUFBU0osS0FBS0ssa0JBQWtCQyxLQUFLTixPQVFsRSxvQkFHSUEsS0FBS0csUUFBUUksVUFBVUMsT0FBTyxnQkFHaEJwQixFQUFNRyxjQUNka0IsVUNsQlAsTUFBTW5CLEVBV1QsY0FQQSxLQUFBb0IsU0FBV2QsU0FBU2UsaUJBQWlDLFNBRTdDLEtBQUFDLGdCQUFvQyxHQUVwQyxLQUFBQyxxQkFBaUMsR0FLckNiLEtBQUtVLFNBQVNJLFNBQVFYLElBRWxCLElBQUlELEVBQUtDLE1BT2pCLHFCQUtJLE9BSEtiLEVBQU1ELFdBQ1BDLEVBQU1ELFNBQVcsSUFBSUMsR0FFbEJBLEVBQU1ELFNBTWpCLHFCQVNJLE9BUEFXLEtBQUtZLGdCQUFrQixHQUV2QlosS0FBS1UsU0FBU0ksU0FBUVgsSUFDZEEsRUFBUUksVUFBVVEsU0FBUyxpQkFDM0JmLEtBQUtZLGdCQUFnQkksS0FBS2IsTUFHM0JILEtBQUtZLGdCQU1oQiwwQkFTSSxPQVJBWixLQUFLYSxxQkFBdUIsR0FFNUJiLEtBQUtpQixlQUFlSCxTQUFRWCxJQUN4QixNQUFNZSxFQUFZZixFQUFRTixjQUFjLGdCQUNwQ3FCLEdBQ0FsQixLQUFLYSxxQkFBcUJHLEtBQUtHLE9BQU9ELEVBQVVwQixpQkFHakRFLEtBQUthLHNCQzdEcEJ2QixFQUFNQyxlIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjb3JlSW50ZXJmYWNlIH0gZnJvbSBcIi4vaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBGb29kcyB9IGZyb20gXCIuL2Zvb2RzXCI7XG5cbi8qKlxuICog5YGl5bq344K544Kz44Ki44KS6KGo44GZ44Kv44Op44K5XG4gKi9cbmV4cG9ydCBjbGFzcyBTY29yZSBpbXBsZW1lbnRzIFNjb3JlSW50ZXJmYWNlIHtcbiAgICAvLyDjgrnjgrPjgqLjga8x44Gk44Gu44Kk44Oz44K544K/44Oz44K544Gg44GR44Gr44GZ44KL44CC5q+O5ZuebmV344GZ44KL44Gu44Gv44Gg44KB44CC44K344Oz44Kw44Or44OI44Oz44OR44K/44O844OzXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFNjb3JlO1xuXG4gICAgLy8gU2NvcmXjgqTjg7Pjgrnjgr/jg7Pjgrnjga8x44Gk44G+44Gn44GX44GL55Sf5oiQ44GX44Gf44GP44Gq44GE44Gu44Gn44K344Oz44Kw44Or44OI44Oz44OR44K/44O844Oz44Gr44GZ44KL44Gf44KB44GrcHJpdmF0ZeOCkuS7mOOBkeOCi1xuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIC8qKlxuICAgICAqIOOCt+ODs+OCsOODq+ODiOODs+ODkeOCv+ODvOODs+OBruOBn+OCgeOBruODoeOCveODg+ODiVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgLy8g44Kk44Oz44K544K/44Oz44K544GM44Gq44GR44KM44Gw55Sf5oiQ44GZ44KL44CB44GC44KM44Gw55Sf5oiQ44GX44Gq44GEXG4gICAgICAgIGlmKCFTY29yZS5pbnN0YW5jZSkge1xuICAgICAgICAgICAgU2NvcmUuaW5zdGFuY2UgPSBuZXcgU2NvcmUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU2NvcmUuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5ZCI6KiI5YCk44KS566X5Ye644GZ44KL44Ky44OD44K/44O844OX44Ot44OR44OG44KjXG4gICAgICovXG4gICAgZ2V0IHRvdGFsU2NvcmUoKSB7XG4gICAgICAgIGNvbnN0IGZvb2RzID0gRm9vZHMuZ2V0SW5zdGFuY2UoKTtcbiAgICAgICAgLy8gcmVkdWNl44Gn5ZCI6KiI44KS5Ye644GZ44CC5pyA5YiddG90YWw9MOOBi+OCieWni+OBvuOBo+OBpuOAgemFjeWIl+OBi+OCiXNjb3Jl44KS5LiA44Gk44Ga44Gk5Y+W44KK5Ye644GX44GmdG90YWzjgavotrPjgZfjgabjgYTjgY9cbiAgICAgICAgcmV0dXJuIGZvb2RzLmFjdGl2ZUVsZW1lbnRzU2NvcmUucmVkdWNlKCh0b3RhbCwgc2NvcmUpID0+IHRvdGFsICsgc2NvcmUsIDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOODiOODg+ODl+eUu+mdouOBq+WQiOioiOOBruaVsOWApOOCkuihqOekuuOBmeOCi+ODoeOCveODg+ODieOAguOCr+ODquODg+OCr+aZguOBq+Wun+ihjOOBl+OBn+OBhFxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3JlX19udW1iZXInKSEudGV4dENvbnRlbnQgPSBTdHJpbmcodGhpcy50b3RhbFNjb3JlKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRm9vZEludGVyZmFjZSB9IGZyb20gXCIuL2ludGVyZmFjZVwiO1xuaW1wb3J0IHsgU2NvcmUgfSBmcm9tIFwiLi9zY29yZVwiO1xuXG4vKipcbiAqIOOAgOmjn+OBueeJqeWNmOS9k+OCkuihqOOBmeOCr+ODqeOCuVxuICovXG5leHBvcnQgY2xhc3MgRm9vZCBpbXBsZW1lbnRzIEZvb2RJbnRlcmZhY2Uge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OiBIVE1MRGl2RWxlbWVudCkge1xuICAgICAgICAvLyBiaW5k77ya44GT44Gu6Zai5pWw44Gu5Lit44Gn5L2/55So44GV44KM44KLdGhpc+OBr+OAgeOBk+OBrkZvb2Tjgq/jg6njgrnlhoXjga50aGlz44Gg44KI44Gj44Gm5a6j6KiA44Gn44GN44KLXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrRXZlbnRIYW5kbGVyLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOOCr+ODquODg+OCr+OBleOCjOOBn+aZguOBruWHpueQhuOAglxuICAgICAqIOOCr+ODquODg+OCr+OBleOCjOOBn+imgee0oOOBruimi+aghOOBiOOCkuOCouOCr+ODhuOCo+ODlueKtuaFi+OBq+OBmeOCi+OAgeOBi+OBpFxuICAgICAqIOOCueOCs+OCouOCkuioiOeul+OBl+ihqOekuuOCkuWkieabtOOBmeOCi+WHpueQhlxuICAgICAqL1xuICAgIGNsaWNrRXZlbnRIYW5kbGVyKCkge1xuICAgICAgICAvLyB0b2dnbGXjga/jgIHmjIflrprjga7jgq/jg6njgrnjgYzjgYLjgaPjgZ/loLTlkIjjga/mtojjgZnjgIHjgarjgYvjgaPjgZ/jgonku5jjgZHjgovlh6bnkIbjgIJcbiAgICAgICAgLy8g6Zai5pWw44Gu5Lit44GndGhpc+OCkuS9v+OBhuWgtOWQiOOBr+ato+OBl+OBhHRoaXPjgpLmjIfjgZfnpLrjgZXjgarjgYTjga7jgafjgIFiaW5k44KS5L2/44GGXG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCdmb29kLS1hY3RpdmUnKTtcblxuICAgICAgICAvLyDlkIzkuIDjga7jgqTjg7Pjgrnjgr/jg7PjgrnjgpLmoLzntI3jgILjgrfjg7PjgrDjg6vjg4jjg7Pjg5Hjgr/jg7zjg7PjgIJcbiAgICAgICAgY29uc3Qgc2NvcmUgPSBTY29yZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICBzY29yZS5yZW5kZXIoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBGb29kc0ludGVyZmFjZSB9IGZyb20gXCIuL2ludGVyZmFjZVwiO1xuaW1wb3J0IHsgRm9vZCB9IGZyb20gXCIuL2Zvb2RcIjtcblxuLyoqXG4gKiDpo5/jgbnnianlhajoiKzjgpLooajjgZnjgq/jg6njgrlcbiAqL1xuZXhwb3J0IGNsYXNzIEZvb2RzIGltcGxlbWVudHMgRm9vZHNJbnRlcmZhY2Uge1xuICAgIC8vIOOCt+ODs+OCsOODq+ODiOODs+ODkeOCv+ODvOODs+OBruOBn+OCgeOBruWuo+iogOOAglxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlIDogRm9vZHM7XG4gICAgLy8g44Kv44Op44K544GMZm9vZOOBrmRvbeOCkuWPluW+l+OBmeOCi+OAgjxIVE1MRGl2RWxlbWVudD7jgajjgZnjgovjgZPjgajjgadkaXbjgr/jgrDjga7opoHntKDjgpLlj5blvpfjgafjgY3jgotcbiAgICBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTERpdkVsZW1lbnQ+KCcuZm9vZCcpO1xuICAgIC8vIOS7iuOCouOCr+ODhuOCo+ODluOBq+OBquOBo+OBpuOBhOOCi+imgee0oOOCkuagvOe0jeOBmeOCi+eusVxuICAgIHByaXZhdGUgX2FjdGl2ZUVsZW1lbnRzOiBIVE1MRGl2RWxlbWVudFtdID0gW107XG4gICAgLy8g5LuK44Ki44Kv44OG44Kj44OW44Gr44Gq44Gj44Gm44GE44KL6KaB57Sg44Gu44K544Kz44Ki44KS5qC857SN44GZ44KL566xXG4gICAgcHJpdmF0ZSBfYWN0aXZlRWxlbWVudHNTY29yZTogbnVtYmVyW10gPSBbXTtcblxuICAgIC8vIEZvb2Rz44Kk44Oz44K544K/44Oz44K544GvMeOBpOOBvuOBp+OBl+OBi+eUn+aIkOOBl+OBn+OBj+OBquOBhOOBruOBp+OCt+ODs+OCsOODq+ODiOODs+ODkeOCv+ODvOODs+OBq+OBmeOCi+OBn+OCgeOBq3ByaXZhdGXjgpLku5jjgZHjgotcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBkb23kuIDjgaTjgZrjgaTlh6bnkIbjgIJcbiAgICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgLy8gRm9vZOOCr+ODqeOCueOBp+OCr+ODquODg+OCr+OCpOODmeODs+ODiOOCkui/veWKoOOBmeOCi1xuICAgICAgICAgICAgbmV3IEZvb2QoZWxlbWVudCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog44K344Oz44Kw44Or44OI44Oz44OR44K/44O844Oz44Gu44Gf44KB44Gu44Oh44K944OD44OJXG4gICAgICovXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICAvLyDjgqTjg7Pjgrnjgr/jg7PjgrnjgYzjgarjgZHjgozjgbDnlJ/miJDjgZnjgovjgIHjgYLjgozjgbDnlJ/miJDjgZfjgarjgYRcbiAgICAgICAgaWYgKCFGb29kcy5pbnN0YW5jZSkge1xuICAgICAgICAgICAgRm9vZHMuaW5zdGFuY2UgPSBuZXcgRm9vZHMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gRm9vZHMuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog44Ki44Kv44OG44Kj44OW44GqZm9vZOimgee0oOOCkuWPluW+l+OBmeOCi+OCsuODg+OCv+ODvOODl+ODreODkeODhuOCo+OAglxuICAgICAqL1xuICAgIGdldCBhY3RpdmVFbGVtZW50cygpIHtcbiAgICAgICAgLy8g5Yid5pyf5YyWXG4gICAgICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnRzID0gW107XG4gICAgICAgIC8vIOOCr+ODqeOCueOBq2Zvb2QtYWN0aXZl44KS5ZCr44KA6KaB57Sg44Gg44GR44KS5qC857SN44GX44Gm44GE44GPXG4gICAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZm9vZC0tYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hY3RpdmVFbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2ZUVsZW1lbnRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOOCouOCr+ODhuOCo+ODluOBqmZvb2TopoHntKDjga7jgrnjgrPjgqLmlbDlgKTjgpLlj5blvpfjgZnjgovjgrLjg4Pjgr/jg7zjg5fjg63jg5Hjg4bjgqNcbiAgICAgKi9cbiAgICBnZXQgYWN0aXZlRWxlbWVudHNTY29yZSgpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudHNTY29yZSA9IFtdO1xuICAgICAgICAvLyDkuIrjga5hY3RpdmVFbGVtZW50cygp44Ky44OD44K/44O844OX44Ot44OR44OG44Kj44GL44KJ6KaB57Sg44KS5Y+W5b6X44GX44Gm44GE44KLXG4gICAgICAgIHRoaXMuYWN0aXZlRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvb2RTY29yZSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmZvb2RfX3Njb3JlJyk7XG4gICAgICAgICAgICBpZiAoZm9vZFNjb3JlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudHNTY29yZS5wdXNoKE51bWJlcihmb29kU2NvcmUudGV4dENvbnRlbnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9hY3RpdmVFbGVtZW50c1Njb3JlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBGb29kcyB9IGZyb20gXCIuL2Zvb2RzXCI7XG5cbkZvb2RzLmdldEluc3RhbmNlKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==