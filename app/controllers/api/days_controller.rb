class Api::DaysController < ApplicationController
    def index
        if (!current_user)
            render json: "User not found", status: 422
        else
            @days = current_user.days
            render "api/days/index"
        end
    end

    def create
        if (!current_user)
            render json: "User not found", status: 422
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
