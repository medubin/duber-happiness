class Api::DaysController < ApplicationController
    def index
        if (!current_user)
            @days = [];
        else
            @days = current_user.days
        end
        render "api/days/index"
    end

    def create
        if (!current_user)
            @day = Day.create(day_params);
            render "api/days/show"
            return
        end
        @day = Day.find_by user_id: current_user.id, date: day_params[:date]
        if (@day)
            @day.happiness = day_params[:happiness]
        else
            @day = Day.create(day_params)
            @day.user_id = current_user.id
        end
        
        @day.save
        render "api/days/show"
    end

    private
    def day_params
      params.require(:day).permit(:date, :happiness)
    end


end
