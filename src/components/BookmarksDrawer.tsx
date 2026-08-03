import React from "react";
import { Attraction } from "../types";
import { ATTRACTIONS_DATA } from "../data/attractions";
import { Bookmark, X, Trash2, ArrowRight, Sparkles, MapPin, Ticket } from "lucide-react";

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarks: string[];
  onRemoveBookmark: (id: string) => void;
  onClearBookmarks: () => void;
  onSelectAttraction: (attraction: Attraction) => void;
}

export const BookmarksDrawer: React.FC<BookmarksDrawerProps> = ({
  isOpen,
  onClose,
  bookmarks,
  onRemoveBookmark,
  onClearBookmarks,
  onSelectAttraction,
}) => {
  if (!isOpen) return null;

  const bookmarkedItems = ATTRACTIONS_DATA.filter((item) => bookmarks.includes(item.id));

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div
        className="w-full max-w-md bg-slate-900/90 backdrop-blur-2xl border-l border-white/15 h-full flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 bg-slate-950/80 backdrop-blur-xl border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-2 text-teal-300 font-extrabold text-base">
            <Bookmark className="w-5 h-5 text-teal-300" />
            <span>我的收藏行程景点 ({bookmarkedItems.length})</span>
          </div>

          <div className="flex items-center space-x-2">
            {bookmarkedItems.length > 0 && (
              <button
                id="clear-all-bookmarks-btn"
                onClick={onClearBookmarks}
                className="text-xs text-rose-400 hover:text-rose-300 px-2.5 py-1 rounded-full bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 transition flex items-center space-x-1"
                title="清空收藏"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>清空</span>
              </button>
            )}

            <button
              id="close-bookmarks-drawer-btn"
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content List */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 custom-scrollbar">
          {bookmarkedItems.length > 0 ? (
            bookmarkedItems.map((item) => (
              <div
                key={item.id}
                className="p-3.5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 space-y-2 flex items-start space-x-3 group relative hover:border-teal-400/40 transition"
              >
                <img
                  src={item.heroImage}
                  alt={item.name}
                  className="w-16 h-16 rounded-xl object-cover shrink-0"
                />

                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-white text-sm line-clamp-1">{item.name}</h4>
                    <button
                      id={`remove-bookmark-${item.id}`}
                      onClick={() => onRemoveBookmark(item.id)}
                      className="text-slate-500 hover:text-rose-400 p-1"
                      title="移除收藏"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex items-center space-x-2 text-[11px] text-slate-300">
                    <span className="text-teal-300">{item.city}</span>
                    <span>•</span>
                    <span>{item.suggestedHours}</span>
                  </div>

                  <div className="text-[11px] text-amber-300 font-medium flex items-center">
                    <Sparkles className="w-3 h-3 mr-1 text-amber-300" />
                    男孩得分: {item.teenScore}分
                  </div>

                  <button
                    id={`view-bookmark-modal-${item.id}`}
                    onClick={() => {
                      onSelectAttraction(item);
                      onClose();
                    }}
                    className="text-[11px] font-semibold text-teal-300 hover:text-teal-200 flex items-center space-x-1 pt-1"
                  >
                    <span>查看对比与路线</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-slate-400 backdrop-blur-md">
                <Bookmark className="w-6 h-6" />
              </div>
              <p className="text-slate-300 text-xs">暂无收藏的景点</p>
              <p className="text-[11px] text-slate-400">在“景点网评比对”中点击书签图标添加心仪景点</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950/80 backdrop-blur-xl border-t border-white/10 shrink-0">
          <button
            id="bookmarks-drawer-close-btn"
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-semibold transition border border-white/10"
          >
            关闭面板
          </button>
        </div>
      </div>
    </div>
  );
};
